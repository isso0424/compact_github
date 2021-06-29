import { APIClient, JsonObj } from "../../types/api/client";
import { RepositoryAPI } from "../../types/api/usecase/repo";
import { Organization } from "../../types/domain/org";
import { Repository } from "../../types/domain/repo";
import { User } from "../../types/domain/user";
import { APIError } from "../../types/error/api";
import { GitHubIssueClient } from "./issue";
import { GitHubPullRequestsClient } from "./pr";

export class GitHubRepositoryClient implements RepositoryAPI {
  private client: APIClient;
  private token: string;
  private prAPI: GitHubPullRequestsClient;
  private issueAPI: GitHubIssueClient;

  constructor(
    client: APIClient,
    token: string,
    prAPI: GitHubPullRequestsClient,
    issueAPI: GitHubIssueClient
  ) {
    this.client = client;
    this.token = token;
    this.prAPI = prAPI;
    this.issueAPI = issueAPI;
  }

  private userRepositoryPath(username: string): string {
    return `/users/${username}/repos`;
  }

  private orgRepositoryPath(orgName: string): string {
    return `/orgs/${orgName}/repos`;
  }

  private createAuthorizeHeader(): JsonObj {
    return { Authorization: `token ${this.token}` };
  }

  private async parseResponse(
    owner: string,
    response: Array<JsonObj>
  ): Promise<Array<Repository>> {
    const parsed = response.map((data) => {
      const name = data.name as string;
      return {
        repo: {
          name,
          owner,
          issues: [],
          pullRequests: [],
        },
        promises: {
          issues: this.issueAPI.fetchRepoIssues(owner, name),
          prs: this.prAPI.fetchRepoPullRequests(owner, name),
        },
      };
    });
    const prPromise = parsed.map((data) => data.promises.prs);
    const issuePromise = parsed.map((data) => data.promises.issues);
    const prs = await Promise.all(prPromise);
    const issues = await Promise.all(issuePromise);

    return prs.map((pr, index) => ({
      ...parsed[index].repo,
      pullRequests: pr,
      issues: issues[index],
    }));
  }

  async fetchUserRepo(user: User): Promise<Array<Repository>> {
    const path = this.userRepositoryPath(user.username);
    const header = this.createAuthorizeHeader();
    const response = await this.client.get(path, {}, header);
    if (response.status >= 200 && response.status < 300) {
      throw new APIError(response.status, response.data.message as string);
    }

    return await this.parseResponse(
      user.username,
      response.data as unknown as Array<JsonObj>
    );
  }

  async fetchOrgRepo(org: Organization): Promise<Array<Repository>> {
    const path = this.orgRepositoryPath(org.name);
    const header = this.createAuthorizeHeader();
    const response = await this.client.get(path, {}, header);
    if (response.status >= 200 && response.status < 300) {
      throw new APIError(response.status, response.data.message as string);
    }

    return await this.parseResponse(
      org.name,
      response.data as unknown as Array<JsonObj>
    );
  }
}
