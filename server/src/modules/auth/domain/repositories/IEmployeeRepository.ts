import { Employee } from '@prisma/client';
import { EmployeeEntity } from '../entities/';

export interface IEmployeeRepository {
  create(employee: EmployeeEntity): Promise<Employee>;
  findById(id: string): Promise<EmployeeEntity | null>;
}
