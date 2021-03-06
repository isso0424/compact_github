import {
  GitPullRequestClosedIcon,
  GitPullRequestIcon,
  IssueClosedIcon,
  IssueOpenedIcon,
} from "@primer/octicons-react";
import React, { FC, useState } from "react";
import { Repository } from "../../types/domain/repo";
import { Content } from "./Content";

const issueIcon = {
  open: IssueOpenedIcon,
  close: IssueClosedIcon,
};

const prIcon = {
  open: GitPullRequestIcon,
  close: GitPullRequestClosedIcon,
  merge: GitPullRequestClosedIcon,
};

const urlBase = "https://github.com";

const contentKinds = {
  pr: "pull",
  issue: "issues",
};

interface Props {
  repository: Repository;
}

export const RepoComponent: FC<Props> = ({ repository }) => {
  const [isOpenDetail, setOpenDetail] = useState(false);
  const repoURL = `${urlBase}/${repository.owner}/${repository.name}`;
  return (
    <div className="m-2 bg-gray-500 border-2 border-gray-700 rounded-md">
      <h3 className="p-2 text-xl border-b-2 border-gray-700">
        <a href={repoURL}>
          {repository.owner}/{repository.name}
        </a>
      </h3>
      <div className="p-2 bg-gray-600">
        {isOpenDetail ? (
          <div>
            <h3 className="text-lg">Issue</h3>
            <div className="p-2">
              {repository.issues.map(({ name, isOpen, body, num }, index) => (
                <Content
                  key={index}
                  name={name}
                  body={body}
                  num={num}
                  icon={isOpen ? issueIcon.open : issueIcon.close}
                  repoURL={repoURL}
                  kind={contentKinds.issue}
                />
              ))}
            </div>
            <h3 className="text-lg">PullRequests</h3>
            <div className="p-2">
              {repository.pullRequests.map(
                ({ name, isOpen, body, num, isMerged }, index) => {
                  return (
                    <Content
                      key={index}
                      name={name}
                      body={body}
                      num={num}
                      icon={
                        isOpen
                          ? prIcon.open
                          : isMerged
                          ? prIcon.merge
                          : prIcon.close
                      }
                      repoURL={repoURL}
                      kind={contentKinds.pr}
                    />
                  );
                }
              )}
            </div>
            <p
              className="cursor-pointer"
              onClick={() => setOpenDetail(() => false)}
            >
              close
            </p>
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => setOpenDetail(() => true)}
          >
            more...
          </div>
        )}
      </div>
    </div>
  );
};
