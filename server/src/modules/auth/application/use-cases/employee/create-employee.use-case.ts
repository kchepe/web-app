import { CredentialEntity, EmployeeEntity } from '../../../domain/entities';
import { Inject, Injectable } from '@nestjs/common';
import { EmailVo, PasswordVo } from '../../../domain/value-objects';
import { GenerateEmployeeId } from '../../../domain/services';
import { Err, Ok, Result } from '../../../../../shared/result';
import { CreateEmployeeCommand } from '../../command/employee';
import {
  IEmployeeCommandsRepository,
  IEmployeeQueriesRepository,
} from 'src/modules/auth/domain/repositories';

@Injectable()
export class CreateEmployeeUseCase {
  constructor(
    @Inject('IEmployeeCommandsRepository')
    private readonly employeeCommandsRepository: IEmployeeCommandsRepository,
    @Inject('IEmployeeQueriesRepository')
    private readonly employeeQueriesRepository: IEmployeeQueriesRepository,
    private readonly generateEmployeeIdService: GenerateEmployeeId
  ) {}

  public async execute(input: CreateEmployeeCommand): Promise<Result<EmployeeEntity, string>> {
    const existingEmployee = await this.employeeQueriesRepository.findByEmail(input.email);

    if (!existingEmployee.err) {
      return Err('Email already in use');
    }

    const password = await PasswordVo.create(input.password);
    const employeeId = await this.generateEmployeeIdService.generate(
      input.firstname,
      input.lastname
    );

    const newEmployee = EmployeeEntity.create(
      {
        firstname: input.firstname,
        lastname: input.lastname,
        email: EmailVo.create(input.email),
        credential: CredentialEntity.create({ password }),
      },
      employeeId
    );

    const employee = await this.employeeCommandsRepository.create(newEmployee);

    if (employee.err) {
      return Err(employee.val);
    }

    return Ok(employee.unwrap());
  }
}
