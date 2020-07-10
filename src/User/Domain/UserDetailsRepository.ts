import {EntityRepository, Repository} from "typeorm";
import {UserDetailsDomain} from "./userDetails.domain";

@EntityRepository(UserDetailsDomain)
export class UserDetailsRepository extends Repository<UserDetailsDomain> {

}
