import { Credential } from '../../credential/entities';

export class Employee {
  constructor(
    public readonly id: string,
    public firstname: string,
    public lastname: string,
    public credential: Credential
  ) {}

  public getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
