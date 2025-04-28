import { Injectable } from '@nestjs/common';
import { EmployeeEntity, CredentialEntity } from '../entities';
import { EmployeeIdService } from '../services';
import { EmailVo, PasswordVo } from '../value-objects';

@Injectable()
export class EmployeeFactory {
  constructor(private readonly employeeIdService: EmployeeIdService) {}

  async create(input: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }): Promise<EmployeeEntity> {
    const passwordVo = await PasswordVo.create(input.password);
    const emailVo = EmailVo.create(input.email);
    const employeeId = await this.employeeIdService.generate(input.firstname, input.lastname);

    return EmployeeEntity.create(
      {
        firstname: input.firstname,
        lastname: input.lastname,
        email: emailVo,
        credential: CredentialEntity.create({ password: passwordVo }),
      },
      employeeId
    );
  }
}
