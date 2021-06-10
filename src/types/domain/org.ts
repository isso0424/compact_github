import { Repository } from "./repo";

export interface Organization {
  name: string;
  iconUrl: string;
  repos: Array<Repository>;
}
