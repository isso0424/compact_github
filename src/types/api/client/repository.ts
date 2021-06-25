import { Repository } from "../../domain/repo";

export interface IRepositoryClient {
  fetchRepositories(owner: string): Promise<Array<Repository>>;
}
