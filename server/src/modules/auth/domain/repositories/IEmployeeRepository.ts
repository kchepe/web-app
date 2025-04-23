import { Employee } from '@prisma/client';
import { EmployeeEntity } from '../entities/';

export interface IEmployeeRepository {
  create(employee: EmployeeEntity): Promise<EmployeeEntity>;
  findById(id: string): Promise<EmployeeEntity | null>;
  getLastCreadtedEmployee: () => Promise<EmployeeEntity | null>;
  findByEmail: (email: string) => Promise<EmployeeEntity | null>;
}
