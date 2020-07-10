import {Module} from '@nestjs/common';
import {UserService} from "./Application/user.service";
import {UserController} from './Infrastructure/user.controller';
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from "./Auth/Application/auth.service";
import {PassportModule} from "@nestjs/passport";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserRepository} from "./Domain/UserRepository";
import {UserDetailsRepository} from "./Domain/UserDetailsRepository";
import {RolRepository} from "../Rol/Domain/RolRepository";

@Module({

    imports: [TypeOrmModule.forFeature([UserRepository,UserDetailsRepository,RolRepository]),
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({

            secret: 'willyselacome',
            signOptions: {
                expiresIn: 10000
            }

        })],
    controllers: [UserController],
    providers: [UserService, AuthService]


})
export class UserModule {
}
