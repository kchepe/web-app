import { CredentialEntity } from '../../entities';

export interface ICredentialCommandsRepository {
  updatePassword(credential: CredentialEntity): Promise<CredentialEntity | null>;
}
