import { Organization } from "../../types/domain/org";
import { Repository } from "../../types/domain/repo";
import { User } from "../../types/domain/user";

export class MockRepositoryAPI {
  fetchUserRepo(user: User): Array<Repository> {
    return [
      {
        owner: user.username,
        name: "example1",
      },
      {
        owner: user.username,
        name: "example2",
      },
    ];
  }

  fetchOrgRepo(org: Organization): Array<Repository> {
    return [
      {
        owner: org.name,
        name: "example1",
      },
      {
        owner: org.name,
        name: "example2",
      },
    ];
  }
}
