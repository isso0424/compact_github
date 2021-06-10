import { Organization } from "../../types/domain/org";

export class MockOrgAPI {
  fetchOrgInfo(name: string): Organization {
    return {
      name,
      iconUrl: "https://example.com",
      repos: [
        {
          owner: name,
          name: "example",
        },
      ],
    };
  }
}
