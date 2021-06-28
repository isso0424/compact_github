import { APIClient, JsonObj } from "../../types/api/client";
import { PullRequestAPI } from "../../types/api/usecase/prs";
import { PullRequest } from "../../types/domain/pr";

export class GitHubPullRequestsClient implements PullRequestAPI {
  private client: APIClient;
  private token: string;

  constructor(client: APIClient, token: string) {
    this.client = client;
    this.token = token;
  }

  private repositoryAPIPath(owner: string, name: string): string {
    return `/repos/${owner}/${name}/pulls?state=all`;
  }

  private createAuthorizeHeader(): JsonObj {
    return { Authorization: `token ${this.token}` };
  }

  async fetchRepoPullRequests(
    owner: string,
    name: string
  ): Promise<Array<PullRequest>> {
    const path = this.repositoryAPIPath(owner, name);
    const header = this.createAuthorizeHeader();
    const response = await this.client.get(path, {}, header);
    return (response.data as unknown as Array<JsonObj>).map((data) => ({
      name: data.title as string,
      num: data.number as number,
      body: data.body as string,
      isOpen: data.state === "open",
      isMerged: data.merged as boolean,
    }));
  }
}
