import { Issue } from "./issue";
import { PullRequest } from "./pr";

export interface Repository {
  name: string;
  owner: string;
  issues: Array<Issue>;
  pullRequests: Array<PullRequest>;
}
