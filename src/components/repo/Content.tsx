import React, { FC, useState } from "react";

const MAX_CHAR_COUNT = 20;

interface Props {
  name: string;
  iconURL: string;
  num: number;
  body: string;
}

export const Content: FC<Props> = ({ name, iconURL, num, body }) => {
  const [isOpenBody, setIsOpenBody] = useState(false);
  return (
    <div>
      <div className="flex align-middle">
        <img className="w-8 h-8" src={iconURL} />
        <h3 className="px-4 text-lg">{num}</h3>
        <h3 className="text-xl">{name}</h3>
      </div>
      <div className="p-2 m-2 bg-black rounded-lg">
        {isOpenBody || body.length < MAX_CHAR_COUNT ? (
          <div onClick={() => setIsOpenBody(() => false)}>{body}</div>
        ) : (
          <div onClick={() => setIsOpenBody(() => true)}>
            {body.substr(0, MAX_CHAR_COUNT)}...
          </div>
        )}
      </div>
    </div>
  );
};
