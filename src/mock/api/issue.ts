import { IssueAPI } from "../../types/api/usecase/issue";
import { Issue } from "../../types/domain/issue";

export class MockIssueAPI implements IssueAPI {
  fetchRepoIssues(_owner: string, _name: string): Promise<Array<Issue>> {
    return new Promise(() => [
      {
        name: "example1",
        isOpen: true,
        body: "body",
        num: 1,
      },
      {
        name: "example2",
        isOpen: false,
        body: "body",
        num: 2,
      },
    ]);
  }
}
