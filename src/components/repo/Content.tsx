import React, { FC, useState } from "react";

const MAX_CHAR_COUNT = 10;

interface Props {
  name: string;
  iconURL: string;
  num: number;
  body: string;
}

export const Detail: FC<Props> = ({ name, iconURL, num, body }) => {
  const [isOpenBody, setIsOpenBody] = useState(false);
  return (
    <div>
      <img src={iconURL} />
      <h4>{num}</h4>
      <h3>{name}</h3>
      {isOpenBody ? (
        <div onClick={() => setIsOpenBody(() => false)}>{body}</div>
      ) : (
        <div onClick={() => setIsOpenBody(() => true)}>
          {body.substr(0, MAX_CHAR_COUNT)}
          {body.length > 10 && "..."}
        </div>
      )}
    </div>
  );
};
