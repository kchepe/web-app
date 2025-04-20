import { Injectable } from '@nestjs/common';
import { Employee } from 'src/domain/employee/entities';
import { EmployeeBaseRepo } from 'src/domain/employee/repositories/base/employee-base.repo';

@Injectable()
export class InMemoryEmplyeeRepository extends EmployeeBaseRepo {
  private employees: Employee[] = [];

  async findAll(): Promise<Employee[]> {
    return this.employees;
  }

  async findById(id: string): Promise<Employee | null> {
    return this.employees.find((t) => t.id === id) ?? null;
  }
}
