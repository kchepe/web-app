import { CredentialEntity } from '../entities';

export interface ICredentialRepository {
  updatePassword(credential: CredentialEntity): Promise<CredentialEntity | null>;
  getCredentialByEmployeeId(employeeId: string): Promise<CredentialEntity | null>;
}
