import { User } from "../../domain/user";

export interface UserAPI {
  fetchUserInfo(username: string): Promise<User>;
}
