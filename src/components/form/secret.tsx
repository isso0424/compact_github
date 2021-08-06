import { ChangeEvent, FC, FormEvent } from "react";
import { TextForm } from "./textForm";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: string;
  placeholder: string;
  submitText: string;
}

export const SecretForm: FC<Props> = ({
  onChange,
  onSubmit,
  value,
  placeholder,
  submitText,
}) => {
  return (
    <TextForm
      onSubmit={onSubmit}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      submitText={submitText}
      type="password"
    />
  );
};
