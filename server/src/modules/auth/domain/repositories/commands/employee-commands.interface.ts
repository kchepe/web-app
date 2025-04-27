import { EmployeeEntity } from '../../entities';
import { Result } from '../../../../../shared/result';

export type ISaveEmployeeCommandResponse = Result<string, string>;

export interface IEmployeeCommandsRepository {
  save(employee: EmployeeEntity): Promise<ISaveEmployeeCommandResponse>;
}
