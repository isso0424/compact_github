import React, { FC, useState } from "react";
import { RepoComponent } from "../components/repo/Repository";
import { MockRepositoryAPI } from "../mock/api/repo";
import { MockUserAPI } from "../mock/api/user";
import { Repository } from "../types/domain/repo";

export const TestPage: FC = () => {
  const mockClient = new MockRepositoryAPI();
  const mockUserClient = new MockUserAPI();
  const [userRepo, setUserRepo] = useState<Array<Repository>>([]);
  mockUserClient
    .fetchUserInfo("example1")
    .then((data) => {
      return mockClient.fetchUserRepo(data);
    })
    .then((data) => setUserRepo(() => data));

  return (
    <div>
      {userRepo.map((repo, index) => {
        return <RepoComponent key={index} repository={repo} />;
      })}
    </div>
  );
};
