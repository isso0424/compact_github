import { FC } from "react";
import { Repository } from "../../types/domain/repo";
import { RepoComponent } from "./Repository";

interface Props {
  repositories: Array<Repository>;
}

export const RepoList: FC<Props> = ({ repositories }) => {
  return (
    <>
      {repositories.map((repo) => (
        <RepoComponent repository={repo} />
      ))}
    </>
  );
};
