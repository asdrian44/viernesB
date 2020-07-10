import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'entry'})
export class RubroDomain extends BaseEntity{

    @PrimaryGeneratedColumn({name:'id_item'})
    idItem:number;


    @Column({name:'entry',nullable:false})
    entry:string;




}
