import { PullRequestAPI } from "../../types/api/usecase/prs";
import { PullRequest } from "../../types/domain/pr";

export class MockPRAPI implements PullRequestAPI {
  async fetchRepoPullRequests(
    _owner: string,
    _name: string
  ): Promise<Array<PullRequest>> {
    return new Promise((resolve) =>
      resolve([
        {
          name: "example1",
          isOpen: false,
          isMerged: true,
          body: "body",
          num: 3,
        },
        {
          name: "example2",
          isOpen: false,
          isMerged: false,
          body: "body",
          num: 4,
        },
        {
          name: "example3",
          isOpen: true,
          isMerged: false,
          body: "body",
          num: 5,
        },
      ])
    );
  }
}
