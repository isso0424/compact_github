import { MockUserAPI } from "../../../src/mock/api/user";

test("check return value from mocked user api", async () => {
  const userAPI = new MockUserAPI();
  const username = "isso0424";
  const data = await userAPI.fetchUserInfo(username);

  expect(data.username).toBe(username);
  expect(data.iconUrl).toBe("https://example.com");

  expect(data.repos[0].owner).toBe(username);
  expect(data.repos[0].name).toBe("example1");
  expect(data.repos[0].issues[0].name).toBe("testIssue1");
  expect(data.repos[0].issues[0].num).toBe(1);
  expect(data.repos[0].issues[0].isOpen).toBeTruthy();
  expect(data.repos[0].issues[0].body).toBe("issue's body");
});
