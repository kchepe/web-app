import { EmployeeEntity } from '../entities/';
import { Result } from 'src/shared/result';

export interface IEmployeeRepository {
  create(employee: EmployeeEntity): Promise<EmployeeEntity>;
  findById(id: string): Promise<Result<EmployeeEntity, string>>;
  getLastCreadtedEmployee: () => Promise<EmployeeEntity | null>;
  findByEmail: (email: string) => Promise<EmployeeEntity | null>;
}
