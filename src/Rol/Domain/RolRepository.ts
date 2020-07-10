import {EntityRepository, Repository} from "typeorm";
import {RolDomain} from "./Rol.domain";

@EntityRepository(RolDomain)
export class RolRepository  extends Repository<RolDomain>{


}
