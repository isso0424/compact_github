import React, { FC } from "react";
import { RepoComponent } from "../components/repo/Repository";
import { MockRepositoryAPI } from "../mock/api/repo";
import { MockUserAPI } from "../mock/api/user";

export const TestPage: FC = () => {
  const mock = new MockRepositoryAPI();
  const mockUser = new MockUserAPI();
  return (
    <div>
      {mock
        .fetchUserRepo(mockUser.fetchUserInfo("example"))
        .map((repo, index) => {
          return <RepoComponent key={index} repository={repo} />;
        })}
    </div>
  );
};
