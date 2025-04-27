import { CredentialEntity } from '../../entities';
import { Result } from '../../../../../shared/result';

export type IUpdatePasswordResponse = Result<void, string>;

export interface ICredentialCommandsRepository {
  updatePassword(credential: CredentialEntity): Promise<IUpdatePasswordResponse>;
}
