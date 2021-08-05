import { ChangeEvent, FC, useState } from "react";
import { Repository } from "../../../types/domain/repo";
import { SearcherForm } from "./Form";
import { Results } from "./Results";

interface Props {
  repositories: Array<Repository>;
}

export const Searcher: FC<Props> = ({ repositories }) => {
  const [query, setQuery] = useState("");
  const [inputting, setInputting] = useState("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputting(event.target.value);
  };

  const onQueryChange = () => {
    setQuery(inputting);
  };

  return (
    <>
      <SearcherForm
        value={inputting}
        onChange={onInputChange}
        onSubmit={onQueryChange}
      />
      <Results query={query} repositories={repositories} />
    </>
  );
};
