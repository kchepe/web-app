import { EmployeeEntity } from '../../entities';
import { Result } from '../../../../../shared/result';

export type EmployeeCommandResponse = Result<EmployeeEntity, string>;

export interface IEmployeeCommandsRepository {
  create(employee: EmployeeEntity): Promise<EmployeeCommandResponse>;
}
