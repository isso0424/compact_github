import { MockRepositoryAPI } from "../../../src/mock/api/repo";

test("check mock repository value", async () => {
  const repoAPI = new MockRepositoryAPI();
  const org = {
    name: "example",
    iconUrl: "https://example.com",
    repos: [],
  };
  const dataInOrg = await repoAPI.fetchOrgRepo(org);
  expect(dataInOrg[0].owner).toBe("example");
  expect(dataInOrg[0].name).toBe("example1");
  expect(dataInOrg[0].issues[0].name).toBe("testIssue1");
  expect(dataInOrg[0].issues[0].num).toBe(1);
  expect(dataInOrg[0].issues[0].isOpen).toBe(true);
  expect(dataInOrg[0].issues[0].body).toBe("issue's body");
  expect(dataInOrg[0].issues[1].name).toBe("closedIssue1");
  expect(dataInOrg[0].issues[1].num).toBe(2);
  expect(dataInOrg[0].issues[1].isOpen).toBe(false);
  expect(dataInOrg[0].issues[1].body).toBe("closed issue's body");
  expect(dataInOrg[0].pullRequests[0].name).toBe("testPR1");
  expect(dataInOrg[0].pullRequests[0].num).toBe(3);
  expect(dataInOrg[0].pullRequests[0].isOpen).toBe(false);
  expect(dataInOrg[0].pullRequests[0].body).toBe("pr's body");
  expect(dataInOrg[0].pullRequests[0].isMerged).toBe(false);

  expect(dataInOrg[1].owner).toBe("example");
  expect(dataInOrg[1].name).toBe("example2");
  expect(dataInOrg[1].issues[0].name).toBe("testIssue1");
  expect(dataInOrg[1].issues[0].num).toBe(1);
  expect(dataInOrg[1].issues[0].isOpen).toBe(true);
  expect(dataInOrg[1].issues[0].body).toBe("issue's body");
  expect(dataInOrg[1].issues[1].name).toBe("closedIssue1");
  expect(dataInOrg[1].issues[1].num).toBe(2);
  expect(dataInOrg[1].issues[1].isOpen).toBe(false);
  expect(dataInOrg[1].issues[1].body).toBe("closed issue's body");
  expect(dataInOrg[1].pullRequests[0].name).toBe("testPR1");
  expect(dataInOrg[1].pullRequests[0].num).toBe(3);
  expect(dataInOrg[1].pullRequests[0].isOpen).toBe(false);
  expect(dataInOrg[1].pullRequests[0].body).toBe("pr's body");
  expect(dataInOrg[1].pullRequests[0].isMerged).toBe(true);

  const user = {
    username: "example",
    iconUrl: "https://example.com",
    repos: [],
  };
  const dataInUser = await repoAPI.fetchUserRepo(user);
  expect(dataInUser[0].owner).toBe("example");
  expect(dataInUser[0].name).toBe("example1");
  expect(dataInUser[0].issues[0].name).toBe("testIssue1");
  expect(dataInUser[0].issues[0].num).toBe(1);
  expect(dataInUser[0].issues[0].isOpen).toBe(true);
  expect(dataInUser[0].issues[0].body).toBe("issue's body");
  expect(dataInUser[0].issues[1].name).toBe("closedIssue1");
  expect(dataInUser[0].issues[1].num).toBe(3);
  expect(dataInUser[0].issues[1].isOpen).toBe(false);
  expect(dataInUser[0].issues[1].body).toBe("closed issue's body");
  expect(dataInUser[0].pullRequests[0].name).toBe("testPR1");
  expect(dataInUser[0].pullRequests[0].num).toBe(2);
  expect(dataInUser[0].pullRequests[0].isOpen).toBe(true);
  expect(dataInUser[0].pullRequests[0].body).toBe("pr's body");
  expect(dataInUser[0].pullRequests[0].isMerged).toBe(false);

  expect(dataInUser[1].owner).toBe("example");
  expect(dataInUser[1].name).toBe("example2");
  expect(dataInUser[1].issues[0].name).toBe("testIssue1");
  expect(dataInUser[1].issues[0].num).toBe(1);
  expect(dataInUser[1].issues[0].isOpen).toBe(true);
  expect(dataInUser[1].issues[0].body).toBe("issue's body");
  expect(dataInUser[1].issues[1].name).toBe("closedIssue1");
  expect(dataInUser[1].issues[1].num).toBe(2);
  expect(dataInUser[1].issues[1].isOpen).toBe(false);
  expect(dataInUser[1].issues[1].body).toBe("closed issue's body");
  expect(dataInUser[1].pullRequests[0].name).toBe("testPR1");
  expect(dataInUser[1].pullRequests[0].num).toBe(3);
  expect(dataInUser[1].pullRequests[0].isOpen).toBe(true);
  expect(dataInUser[1].pullRequests[0].body).toBe("pr's body");
  expect(dataInUser[1].pullRequests[0].isMerged).toBe(false);
});
