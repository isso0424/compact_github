import { Issue } from "../../domain/issue";

export interface IssueAPI {
  fetchRepoIssues(owner: string, name: string): Promise<Array<Issue>>;
}
