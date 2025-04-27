import { CredentialEntity } from '../../entities';

export interface ICredentialQueriesRepository {
  getCredentialByEmployeeId(employeeId: string): Promise<CredentialEntity | null>;
}
