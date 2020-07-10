import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'irisumakina284',
    database: 'covid',
    entities: ['__dirname' + '/../**/*.domain.js'],
    synchronize: true,
    autoLoadEntities: true


}
