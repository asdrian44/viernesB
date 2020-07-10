import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique} from 'typeorm';
import {UserDomain} from "./user.domain";

@Entity({name: 'user_details'})
@Unique(['name', 'lastName'])
export class UserDetailsDomain extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id_user'})
    @OneToOne(type => UserDomain, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_user'})
    idUser: UserDomain;


    @Column({name: 'name', length: 40, nullable: false})
    name: string;
    @Column({name: 'last_name', length: 50, nullable: false})
    lastName: string;


}
