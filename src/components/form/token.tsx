import { ChangeEvent, FC, FormEvent } from "react";
import { SecretForm } from "./secret";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: string;
}

export const TokenForm: FC<Props> = ({ onChange, onSubmit, value }) => (
  <SecretForm
    value={value}
    onChange={onChange}
    onSubmit={onSubmit}
    placeholder="Private Access Token"
    submitText="Submit"
  />
);
