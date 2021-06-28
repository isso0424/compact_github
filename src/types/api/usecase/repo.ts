import { Organization } from "../../domain/org";
import { Repository } from "../../domain/repo";
import { User } from "../../domain/user";

export interface RepositoryAPI {
  fetchUserRepo(user: User): Promise<Array<Repository>>;
  fetchOrgRepo(org: Organization): Promise<Array<Repository>>;
}
