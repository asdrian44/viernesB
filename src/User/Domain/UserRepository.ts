import {EntityRepository, Repository} from "typeorm";
import {UserDomain} from "./user.domain";

@EntityRepository(UserDomain)
export class UserRepository extends Repository<UserDomain> {


}
