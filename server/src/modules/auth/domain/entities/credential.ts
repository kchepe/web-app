import { BaseEntity, UniqueEntityID } from '../../../../shared/domain';
import { PasswordVo } from '../value-objects';

interface CredentialEntityProps {
  password: PasswordVo;
  employeeId?: string;
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

  get employeeId(): string {
    return this.props.employeeId;
  }

  updatePassword(newPassword: PasswordVo) {
    this.props.password = newPassword;
  }
}
