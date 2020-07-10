import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "../../Domain/UserRepository";
import {JwtService} from "@nestjs/jwt";
import {AuthModel} from "../Domain/authModel";
import * as cry from 'bcrypt';
import {Connection} from "typeorm";
import {UserDomain} from "../../Domain/user.domain";
import {UserDetailsDomain} from "../../Domain/userDetails.domain";
import {LoginModel} from "../Domain/loginModel";
import {RolDomain} from "../../../Rol/Domain/Rol.domain";
import {RolRepository} from "../../../Rol/Domain/RolRepository";

@Injectable()
export class AuthService {

    constructor(@InjectRepository(UserRepository) private  userRepository: UserRepository, private  jwtService: JwtService, private connection: Connection,@InjectRepository(RolRepository) private rol:RolRepository) {
    }


    async registrar(authModel: AuthModel):Promise<any> {

        const query = this.connection.createQueryRunner();
        await query.connect();
        await query.startTransaction();
        try {

             const rol=await this.rol.findOne({
                where:{
                    idRol:1
                }
            });


            const pw = await cry.hash(authModel.password, '$2b$10$AuUzTKpgMLOI2xh/FNohoO');
            const user = new UserDomain();
            user.email = authModel.email;
            user.password = pw;
            user.idRol=rol;

            await query.manager.save('UserDomain', user);

            const data = new UserDetailsDomain();
            data.idUser = user;
            data.name = authModel.name;
            data.lastName = authModel.lastName;

            await query.manager.save('UserDetailsDomain', data);
            await query.commitTransaction();
            return {message: 'Usuario registrado'};

        } catch (e) {
            await query.rollbackTransaction();
            console.log(e)
            throw({message: 'Error al crear usuario'});
        } finally {
            await query.release();
        }


    }

    async login(login: LoginModel):Promise<any> {


        try {
            const pw = await cry.hash(login.password, '$2b$10$AuUzTKpgMLOI2xh/FNohoO');
            const data = await this.userRepository.findOne({
                where: {
                    email: login.email,
                    password: pw
                },
            });

            if (data.email == login.email && data.password == pw) {

                const user = login.email;
                const payload = {user: user};
                const token = await this.jwtService.sign(payload);
                return {token: token};

            }


        } catch (e) {
            console.log(e);
            throw ({message: 'email o password incorrectos'});
        }

    }


}
