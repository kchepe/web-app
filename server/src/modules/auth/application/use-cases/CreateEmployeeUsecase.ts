import { randomUUID } from 'crypto';
import { CredentialEntity, EmployeeEntity } from '../../domain/entities';
import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from '../../interface';
import { Inject, Injectable } from '@nestjs/common';
import { IEmployeeRepository } from '../../domain/repositories';

@Injectable()
export class CreateEmployeeUseCase {
  constructor(
    @Inject('IEmployeeRepository') private readonly employeeRepository: IEmployeeRepository
  ) {}

  async execute(input: CreateEmployeeDto): Promise<Employee> {
    const id = randomUUID();

    const credential = CredentialEntity.create({ password: input.password });
    const newEmployee = EmployeeEntity.create({
      firstname: input.firstname,
      lastname: input.lastname,
      email: input.email,
      credential,
    });

    const employee = await this.employeeRepository.create(newEmployee);

    return employee;
  }
}
