import { MockOrgAPI } from "../../../src/mock/api/org";

test("check organization", async () => {
  const mockAPI = new MockOrgAPI();
  const name = "example";
  const data = await mockAPI.fetchOrgInfo(name);

  expect(data.name).toBe(name);
  expect(data.iconUrl).toBe("https://example.com");
  expect(data.repos.length).toBe(2);

  const repo = data.repos[0];
  expect(repo.owner).toBe(name);
  expect(repo.name).toBe("example1");

  const issue = repo.issues[0];
  expect(issue.name).toBe("testIssue1");
  expect(issue.num).toBe(1);
  expect(issue.isOpen).toBeTruthy();
  expect(issue.body).toBe("issue's body");
});
