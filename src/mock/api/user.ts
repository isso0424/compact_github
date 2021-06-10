import { UserAPI } from "../../types/api/usecase/user";
import { User } from "../../types/domain/user";

export class MockUserAPI implements UserAPI {
  fetchUserInfo(username: string): User {
    return {
      username,
      iconUrl: "https://example.com",
      repos: [
        {
          name: "example",
          owner: username,
        },
      ],
    };
  }
}
