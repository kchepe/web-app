import { BaseEntity, UniqueEntityID } from '../../../../shared/domain';
import { EmailVo } from '../value-objects/email.vo';
import { CredentialEntity } from './credential';

interface EmployeeEntityProps {
  firstname: string;
  lastname: string;
  email: EmailVo;
  credential?: CredentialEntity;
}

export class EmployeeEntity extends BaseEntity<EmployeeEntityProps> {
  private constructor(props: EmployeeEntityProps, id?: UniqueEntityID) {
    super(props, id);
  }

  // TODO: transfer the create to a factory
  static create(props: EmployeeEntityProps, id?: UniqueEntityID): EmployeeEntity {
    return new EmployeeEntity(props, id);
  }

  get firstname(): string {
    return this.props.firstname;
  }

  get lastname(): string {
    return this.props.lastname;
  }

  get email(): EmailVo {
    return this.props.email;
  }

  getCredential(): CredentialEntity | undefined {
    return this.props.credential;
  }

  updateLastname(newLastname: string) {
    this.props.lastname = newLastname;
  }

  updateFirstname(newFirstname: string) {
    this.props.firstname = newFirstname;
  }

  updateEmail(newEmail: EmailVo) {
    this.props.email = newEmail;
  }
}
