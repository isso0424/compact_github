import { Repository } from "./repo";

export interface User {
  username: string;
  iconUrl: string;
  repos: Array<Repository>;
}
