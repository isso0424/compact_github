import { Organization } from "../../domain/org";

export interface OrganizationAPI {
  fetchOrgInfo(name: string): Organization;
}
