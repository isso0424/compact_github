export interface PullRequest {
  name: string;
  num: number;
  body: string;
  isOpen: boolean;
  isMerged: boolean;
}
