import { FC } from "react";
import { Repository } from "../../../types/domain/repo";
import { RepoList } from "../List";

interface Props {
  repositories: Array<Repository>;
  query: string;
}

export const Results: FC<Props> = ({ repositories, query }) => {
  const queries = query.split(" ");
  const filtered = repositories.filter((value) =>
    queries.every((q) => value.name.includes(q))
  );

  if (filtered.length === 0) return <h3>Target not found</h3>;

  return <RepoList repositories={filtered} />;
};
