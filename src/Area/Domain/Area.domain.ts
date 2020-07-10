import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'area'})
export class AreaDomain extends BaseEntity{

    @PrimaryGeneratedColumn({name:'id_area'})
    idArea:number;

    @Column({name:'area',nullable:false})
    area:string;



}
