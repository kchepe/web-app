import { BaseEntity, UniqueEntityID } from '../../../../shared/domain';
import { CredentialEntity } from './credential';

interface EmployeeEntityProps {
  firstname: string;
  lastname: string;
  email: string;
  credential?: CredentialEntity;
}

export class EmployeeEntity extends BaseEntity<EmployeeEntityProps> {
  private constructor(props: EmployeeEntityProps, id?: UniqueEntityID) {
    super(props, id);
  }

  static create(props: EmployeeEntityProps, id?: UniqueEntityID): EmployeeEntity {
    return new EmployeeEntity(props, id);
  }

  get firstname(): string {
    return this.props.firstname;
  }

  get lastname(): string {
    return this.props.lastname;
  }

  get email(): string {
    return this.props.email;
  }

  getCredential(): CredentialEntity | undefined {
    return this.props.credential;
  }

  updateLastname(newLastname: string) {
    this.props.lastname = newLastname;
  }

  updatefirstname(newEmail: string) {
    this.props.email = newEmail;
  }

  updateEmail(newFirstname: string) {
    this.props.firstname = newFirstname;
  }
}
