import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique} from 'typeorm';
import {RolDomain} from "../../Rol/Domain/Rol.domain";

@Entity({name: 'user'})
@Unique(['email'])
export class UserDomain extends BaseEntity {


    @PrimaryGeneratedColumn({name: 'id_user'})
    idUser: number;
    @Column({name: 'email', length: 50, nullable: false})
    email: string;
    @Column({name: 'password', length: 250, nullable: false})
    password: string;


    @Column({name: 'id_rol', nullable: false})
    @ManyToOne(type => RolDomain,idRol=>idRol.idRol, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT'
    })
    @JoinColumn({name: 'id_rol'})
    idRol: RolDomain;


}
