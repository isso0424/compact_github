import { MockIssueAPI } from "../../../src/mock/api/issue";

test("check return value mock issue api", async () => {
  const issueAPI = new MockIssueAPI();
  const data = await issueAPI.fetchRepoIssues("example", "username");

  expect(data[0].name).toBe("example1");
  expect(data[0].body).toBe("body");
  expect(data[0].isOpen).toBe(true);
  expect(data[0].num).toBe(1);

  expect(data[1].name).toBe("example2");
  expect(data[1].body).toBe("body");
  expect(data[1].isOpen).toBe(false);
  expect(data[1].num).toBe(2);
});
