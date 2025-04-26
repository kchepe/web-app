import { EmployeeEntity } from '../entities/';
import { Result } from 'src/shared/result';

export type EmployeeQueryResponse = Result<EmployeeEntity, string>;

export interface IEmployeeRepository {
  create(employee: EmployeeEntity): Promise<EmployeeQueryResponse>;
  findById(id: string): Promise<EmployeeQueryResponse>;
  getLastCreatedEmployee: () => Promise<EmployeeQueryResponse>;
  findByEmail: (email: string) => Promise<EmployeeQueryResponse>;
}
