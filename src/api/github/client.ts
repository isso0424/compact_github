import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { APIClient, JsonObj, Response } from "../../types/api/client";

const baseURL = "https://api.github.com";
const acceptType = "vnd.github.v3+json";

type axiosRequestFunc = <T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
) => Promise<R>;

export class GitHubAPIClient implements APIClient {
  private parseURL(path: string): string {
    return baseURL + path;
  }

  private injectHeader(header: JsonObj): void {
    header.Accept = acceptType;
  }

  private async request(
    path: string,
    body: JsonObj,
    header: JsonObj,
    requestFunc: axiosRequestFunc
  ): Promise<Response> {
    const url = this.parseURL(path);
    this.injectHeader(header);
    const response = await requestFunc(url, { data: body, headers: header });

    return {
      data: JSON.parse(response.data),
      status: response.status,
    };
  }

  async get(path: string, body: JsonObj, header: JsonObj): Promise<Response> {
    return await this.request(path, body, header, axios.get);
  }

  async post(path: string, body: JsonObj, header: JsonObj): Promise<Response> {
    return await this.request(path, body, header, axios.post);
  }

  async put(path: string, body: JsonObj, header: JsonObj): Promise<Response> {
    return await this.request(path, body, header, axios.put);
  }

  async del(path: string, body: JsonObj, header: JsonObj): Promise<Response> {
    return await this.request(path, body, header, axios.delete);
  }
}
