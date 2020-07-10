import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {LoginModel} from "../Auth/Domain/loginModel";
import {AuthService} from "../Auth/Application/auth.service";
import {AuthModel} from "../Auth/Domain/authModel";

@Controller()
export class UserController {

    constructor(private services: AuthService) {
    }

    @Post('login')
    login(@Body() loginModel: LoginModel, @Res() res) {
        console.log(loginModel);
        return this.services.login(loginModel).then(value => {
            res.status(HttpStatus.OK).send(value);
        }).catch(reason => {
            res.status(HttpStatus.BAD_REQUEST).send(reason);
        });

    }


    @Post('register')
    register(@Body() registro: AuthModel, @Res() res) {

        this.services.registrar(registro).then(value => {
            res.status(HttpStatus.OK).send(value);
        }).catch(reason => {
            res.status(HttpStatus.BAD_REQUEST).send(reason);
        })

    }
}
