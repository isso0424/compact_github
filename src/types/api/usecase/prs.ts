import { PullRequest } from "../../domain/pr";

export interface PullRequestAPI {
  fetchRepoPullRequests(
    owner: string,
    name: string
  ): Promise<Array<PullRequest>>;
}
