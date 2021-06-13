import { UserAPI } from "../../types/api/usecase/user";
import { User } from "../../types/domain/user";

export class MockUserAPI implements UserAPI {
  fetchUserInfo(username: string): User {
    return {
      username,
      iconUrl: "https://example.com",
      repos: [
        {
          owner: username,
          name: "example1",
          issues: [
            {
              name: "testIssue1",
              num: 1,
              isOpen: true,
              body: "issue's body",
            },
            {
              name: "closedIssue1",
              num: 3,
              isOpen: false,
              body: "closed issue's body",
            },
          ],
          pullRequests: [
            {
              name: "testPR1",
              num: 2,
              isOpen: true,
              body: "pr's body",
              isMerged: false,
            },
          ],
        },
        {
          owner: username,
          name: "example2",
          issues: [
            {
              name: "testIssue1",
              num: 1,
              isOpen: true,
              body: "issue's body",
            },
            {
              name: "closedIssue1",
              num: 2,
              isOpen: false,
              body: "closed issue's body",
            },
          ],
          pullRequests: [
            {
              name: "testPR1",
              num: 3,
              isOpen: true,
              body: "pr's body",
              isMerged: false,
            },
          ],
        },
      ],
    };
  }
}
