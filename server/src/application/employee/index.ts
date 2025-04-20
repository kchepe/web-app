import { Injectable } from '@nestjs/common';
import { Employee } from 'src/domain/employee/entities';
import { EmployeeBaseRepo } from 'src/domain/employee/repositories/base/employee-base.repo';

@Injectable()
export class GetAllEmployeeUseCase {
  constructor(private readonly employeeRepo: EmployeeBaseRepo) {}

  async execute(): Promise<Employee[]> {
    return this.employeeRepo.findAll();
  }
}
