import React, { FC } from "react";
import { Repository } from "../../types/domain/repo";

interface Props {
  repository: Repository;
}

export const RepoComponent: FC<Props> = ({ repository }) => {
  return (
    <div>
      <link href={`https://github.com/${repository.owner}/${repository.name}`}>
        {repository.owner}/{repository.name}
      </link>
    </div>
  );
};
