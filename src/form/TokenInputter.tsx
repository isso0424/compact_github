import React, { ChangeEvent, FC } from "react";

interface Props {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  token: string;
}

export const TokenInputter: FC<Props> = (props: Props) => {
  return (
    <div>
      <form>
        <input onChange={props.onChange} value={props.token} />
      </form>
    </div>
  );
};
