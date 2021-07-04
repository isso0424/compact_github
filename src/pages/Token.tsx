import { ChangeEvent, FC, FormEvent, useState } from "react";
import { TokenForm } from "../components/form/token";

const tokenKey = "gt";

export const TokenPage: FC = () => {
  const [token, setToken] = useState("");
  const onSubmit = (_: FormEvent<HTMLFormElement>) => {
    window.localStorage.setItem(tokenKey, token);
    setToken(() => "");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(() => event.target.value);
  };

  return (
    <div>
      <TokenForm value={token} onSubmit={onSubmit} onChange={onChange} />
    </div>
  );
};
