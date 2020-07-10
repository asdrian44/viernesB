import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'reports'})
export class ReportDomain  extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_report'})
    idReport: number;
}
