import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'rol'})
export class RolDomain extends BaseEntity {


    @PrimaryGeneratedColumn({name: 'id_rol'})
     idRol: number;

    @Column({length: 20, nullable: false})
     rol: string;
}
