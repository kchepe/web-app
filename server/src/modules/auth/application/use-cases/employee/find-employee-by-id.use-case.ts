import { Inject, Injectable } from '@nestjs/common';
import { Result, Err, Ok } from '../../../../../shared/result';
import { EmployeeEntity } from 'src/modules/auth/domain/entities';
import { GetEmployeeByIdQuery } from '../../queries/employee';
import { IEmployeeQueriesRepository } from '../../../domain/repositories';

export interface IFindEmployeeByIdUseCase {
  execute: (query: GetEmployeeByIdQuery) => Promise<Result<EmployeeEntity, string>>;
}

@Injectable()
export class FindEmployeeByIdUseCase implements IFindEmployeeByIdUseCase {
  constructor(
    @Inject('IEmployeeQueriesRepository')
    private readonly employeeQueriesRepository: IEmployeeQueriesRepository
  ) {}

  public async execute(query: GetEmployeeByIdQuery): Promise<Result<EmployeeEntity, string>> {
    const employeeResult = await this.employeeQueriesRepository.findById(query.id);

    if (employeeResult.err) {
      return Err(employeeResult.val);
    }

    return Ok(employeeResult.unwrap());
  }
}
