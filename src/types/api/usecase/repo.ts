import { Organization } from "../../domain/org";
import { Repository } from "../../domain/repo";
import { User } from "../../domain/user";

export interface RepositoryAPI {
  fetchUserRepo(user: User): Array<Repository>;
  fetchOrgRepo(org: Organization): Array<Repository>;
}
