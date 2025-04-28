import { Inject, Injectable } from '@nestjs/common';
import { Err, Ok } from '../../../../../shared/result';
import { CreateEmployeeCommand } from '../../command/employee';
import {
  ISaveEmployeeCommandResponse,
  IEmployeeCommandsRepository,
  IEmployeeQueriesRepository,
} from 'src/modules/auth/domain/repositories';
import { EmployeeFactory } from '../../../domain/factories';

export interface ICreateEmployeeUsecase {
  execute: (input: CreateEmployeeCommand) => Promise<ISaveEmployeeCommandResponse>;
}

@Injectable()
export class CreateEmployeeUseCase implements ICreateEmployeeUsecase {
  constructor(
    @Inject('IEmployeeCommandsRepository')
    private readonly employeeCommandsRepository: IEmployeeCommandsRepository,
    @Inject('IEmployeeQueriesRepository')
    private readonly employeeQueriesRepository: IEmployeeQueriesRepository,
    private readonly employeeFactory: EmployeeFactory
  ) {}

  public async execute(input: CreateEmployeeCommand): Promise<ISaveEmployeeCommandResponse> {
    const existingEmployee = await this.employeeQueriesRepository.findByEmail(input.email);

    if (existingEmployee.ok) {
      return Err('Email already in use');
    }

    const newEmployee = await this.employeeFactory.create({
      firstname: input.firstname,
      lastname: input.lastname,
      email: input.email,
      password: input.password,
    });

    const employee = await this.employeeCommandsRepository.save(newEmployee);

    if (employee.err) {
      return Err(employee.val);
    }

    return Ok(employee.unwrap());
  }
}
