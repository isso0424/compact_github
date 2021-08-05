import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { TokenForm } from "../components/form/token";
import { RepoList } from "../components/repo/List";
import { MockRepositoryAPI } from "../mock/api/repo";
import { MockUserAPI } from "../mock/api/user";
import { Repository } from "../types/domain/repo";

export const TestPage: FC = () => {
  const mockClient = new MockRepositoryAPI();
  const mockUserClient = new MockUserAPI();
  const [token, setToken] = useState<string>("");
  const [userRepo, setUserRepo] = useState<Array<Repository>>([]);
  useEffect(() => {
    mockUserClient
      .fetchUserInfo("example1")
      .then((data) => {
        return mockClient.fetchUserRepo(data);
      })
      .then((data) => setUserRepo(() => data));
  }, []);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(() => event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToken(() => "");
  };

  return (
    <div>
      <TokenForm
        onChange={changeHandler}
        onSubmit={submitHandler}
        value={token}
      />
      <RepoList repositories={userRepo} />
    </div>
  );
};
