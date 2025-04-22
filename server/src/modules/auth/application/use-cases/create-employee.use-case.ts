import { CredentialEntity, EmployeeEntity } from '../../domain/entities';
import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from '../../interface';
import { Inject, Injectable } from '@nestjs/common';
import { IEmployeeRepository } from '../../domain/repositories';
import { EmailVo, PasswordVo } from '../../domain/value-objects';
import { GenerateEmployeeId } from '../../domain/services';

@Injectable()
export class CreateEmployeeUseCase {
  constructor(
    @Inject('IEmployeeRepository') private readonly employeeRepository: IEmployeeRepository,
    private readonly generateEmployeeIdService: GenerateEmployeeId
  ) {}

  async execute(input: CreateEmployeeDto): Promise<Employee> {
    const existingEmployee = await this.employeeRepository.findByEmail(input.email);
    if (existingEmployee) {
      throw new Error('Email already in use');
    }

    const password = await PasswordVo.create(input.password);
    const employeeId = await this.generateEmployeeIdService.generate(
      input.firstname,
      input.lastname
    );
    const credential = CredentialEntity.create({ password });
    const newEmployee = EmployeeEntity.create(
      {
        firstname: input.firstname,
        lastname: input.lastname,
        email: EmailVo.create(input.email),
        credential,
      },
      employeeId
    );

    const employee = await this.employeeRepository.create(newEmployee);

    return employee;
  }
}
