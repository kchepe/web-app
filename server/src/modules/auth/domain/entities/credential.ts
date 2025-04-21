import { BaseEntity, UniqueEntityID } from '../../../../shared/domain';

interface CredentialEntityProps {
  password: string;
}

export class CredentialEntity extends BaseEntity<CredentialEntityProps> {
  private constructor(props: CredentialEntityProps, id?: UniqueEntityID) {
    super(props, id);
  }

  static create(props: CredentialEntityProps, id?: UniqueEntityID): CredentialEntity {
    return new CredentialEntity(props, id);
  }

  get password(): string {
    return this.props.password;
  }

  updatePassword(newPassword: string) {
    this.props.password = newPassword;
  }
}
