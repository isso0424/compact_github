import { FC, ChangeEvent, FormEvent } from "react";
import { TextForm } from "../../form/textForm";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: string;
}

export const SearcherForm: FC<Props> = ({ onChange, onSubmit, value }) => {
  return (
    <TextForm
      onChange={onChange}
      onSubmit={onSubmit}
      value={value}
      placeholder="Search"
      submitText="Search"
    />
  );
};
