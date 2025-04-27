import { CredentialEntity } from '../../entities';
import { Result } from '../../../../../shared/result';

export type IGetCredentialByEmployeeId = Result<CredentialEntity, string>;

export interface ICredentialQueriesRepository {
  getCredentialByEmployeeId(employeeId: string): Promise<IGetCredentialByEmployeeId>;
}
