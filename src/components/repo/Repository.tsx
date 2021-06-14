import React, { FC, useState } from "react";
import { Repository } from "../../types/domain/repo";
import { Content } from "./Content";

const issueIcon = {
  open: "",
  close: "",
};

const prIcon = {
  open: "",
  close: "",
  merge: "",
};

interface Props {
  repository: Repository;
}

export const RepoComponent: FC<Props> = ({ repository }) => {
  const [isOpenDetail, setOpenDetail] = useState(false);
  return (
    <div>
      <link href={`https://github.com/${repository.owner}/${repository.name}`}>
        {repository.owner}/{repository.name}
      </link>
      {isOpenDetail ? (
        <div onClick={() => setOpenDetail(() => false)}>more...</div>
      ) : (
        <div>
          <h3>Issue</h3>
          <div>
            {repository.issues.map(({ name, isOpen, body, num }, index) => (
              <Content
                key={index}
                name={name}
                body={body}
                num={num}
                iconURL={isOpen ? issueIcon.open : issueIcon.close}
              />
            ))}
          </div>
          <h3>PullRequests</h3>
          <div>
            {repository.pullRequests.map(
              ({ name, isOpen, body, num, isMerged }, index) => {
                <Content
                  key={index}
                  name={name}
                  body={body}
                  num={num}
                  iconURL={
                    isOpen
                      ? prIcon.open
                      : isMerged
                      ? prIcon.merge
                      : prIcon.close
                  }
                />;
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};
