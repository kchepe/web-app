import { Result } from '../../../../../shared/result';
import { EmployeeEntity } from '../../entities';

export type EmployeeQueryResponse = Result<EmployeeEntity, string>;

export interface IEmployeeQueriesRepository {
  findById(id: string): Promise<EmployeeQueryResponse>;
  getLastCreatedEmployee: () => Promise<EmployeeQueryResponse>;
  findByEmail: (email: string) => Promise<EmployeeQueryResponse>;
}
