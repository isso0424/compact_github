import { APIClient, JsonObj } from "../../types/api/client";
import { IssueAPI } from "../../types/api/usecase/issue";
import { Issue } from "../../types/domain/issue";
import { APIError } from "../../types/error/api";

export class GitHubIssueClient implements IssueAPI {
  private client: APIClient;
  private token: string;

  constructor(client: APIClient, token: string) {
    this.client = client;
    this.token = token;
  }

  private issueAPIPath(owner: string, name: string): string {
    return `/repos/${owner}/${name}/issues?state=all`;
  }

  private createAuthorizeHeader(): JsonObj {
    return { Authorization: `token ${this.token}` };
  }

  async fetchRepoIssues(owner: string, name: string): Promise<Array<Issue>> {
    const path = this.issueAPIPath(owner, name);
    const header = this.createAuthorizeHeader();
    const response = await this.client.get(path, {}, header);
    if (response.status >= 200 && response.status < 300) {
      throw new APIError(response.status, response.data.message as string);
    }
    return (response as unknown as Array<JsonObj>).map((data) => ({
      name: data.title as string,
      num: data.number as number,
      isOpen: data.state === "open",
      body: data.body as string,
    }));
  }
}
