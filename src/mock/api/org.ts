import { Organization } from "../../types/domain/org";

export class MockOrgAPI {
  fetchOrgInfo(name: string): Organization {
    return {
      name,
      iconUrl: "https://example.com",
      repos: [
        {
          owner: name,
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
          owner: name,
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
      ],
    };
  }
}
