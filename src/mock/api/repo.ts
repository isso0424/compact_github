import { Organization } from "../../types/domain/org";
import { Repository } from "../../types/domain/repo";
import { User } from "../../types/domain/user";

export class MockRepositoryAPI {
  fetchUserRepo(user: User): Promise<Array<Repository>> {
    return new Promise((resolve) =>
      resolve([
        {
          owner: user.username,
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
          owner: user.username,
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
      ])
    );
  }

  fetchOrgRepo(org: Organization): Promise<Array<Repository>> {
    return new Promise((resolve) =>
      resolve([
        {
          owner: org.name,
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
              num: 2,
              isOpen: false,
              body: "closed issue's body",
            },
          ],
          pullRequests: [
            {
              name: "testPR1",
              num: 3,
              isOpen: false,
              body: "pr's body",
              isMerged: false,
            },
          ],
        },
        {
          owner: org.name,
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
              isOpen: false,
              body: "pr's body",
              isMerged: true,
            },
          ],
        },
      ])
    );
  }
}
