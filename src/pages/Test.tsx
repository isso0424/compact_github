import { FC, useEffect, useState } from "react";
import { Searcher } from "../components/repo/search/Searcher";
import { MockRepositoryAPI } from "../mock/api/repo";
import { MockUserAPI } from "../mock/api/user";
import { Repository } from "../types/domain/repo";

export const TestPage: FC = () => {
  const mockClient = new MockRepositoryAPI();
  const mockUserClient = new MockUserAPI();
  const [userRepo, setUserRepo] = useState<Array<Repository>>([]);
  useEffect(() => {
    mockUserClient
      .fetchUserInfo("example1")
      .then((data) => {
        return mockClient.fetchUserRepo(data);
      })
      .then((data) => setUserRepo(() => data));
  }, []);

  return (
    <div>
      <Searcher repositories={userRepo} />
    </div>
  );
};
