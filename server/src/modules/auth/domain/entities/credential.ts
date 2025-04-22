import { BaseEntity, UniqueEntityID } from '../../../../shared/domain';
import { PasswordVo } from '../value-objects';

interface CredentialEntityProps {
  password: PasswordVo;
}

export class CredentialEntity extends BaseEntity<CredentialEntityProps> {
  private constructor(props: CredentialEntityProps, id?: UniqueEntityID) {
    super(props, id);
  }

  static create(props: CredentialEntityProps, id?: UniqueEntityID): CredentialEntity {
    return new CredentialEntity(props, id);
  }

  get password(): PasswordVo {
    return this.props.password;
  }

  updatePassword(newPassword: PasswordVo) {
    this.props.password = newPassword;
  }
}
