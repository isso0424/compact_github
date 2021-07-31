import { MockPRAPI } from "../../../src/mock/api/pr";

test("check pull requests", async () => {
  const api = new MockPRAPI();
  const data = await api.fetchRepoPullRequests("example", "name");

  expect(data[0].name).toBe("example1");
  expect(data[0].isOpen).toBeFalsy();
  expect(data[0].isMerged).toBeTruthy();
  expect(data[0].body).toBe("body");
  expect(data[0].num).toBe(3);

  expect(data[1].name).toBe("example2");
  expect(data[1].isOpen).toBeFalsy();
  expect(data[1].isMerged).toBeFalsy();
  expect(data[1].body).toBe("body");
  expect(data[1].num).toBe(4);

  expect(data[2].name).toBe("example3");
  expect(data[2].isOpen).toBeTruthy();
  expect(data[2].isMerged).toBeFalsy();
  expect(data[2].body).toBe("body");
  expect(data[2].num).toBe(5);
});
