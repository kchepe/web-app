import { Inject, Injectable } from '@nestjs/common';
import { IEmployeeRepository } from 'src/modules/auth/domain/repositories';
import { Result, Err, Ok } from '../../../../../shared/result';
import { EmployeeEntity } from 'src/modules/auth/domain/entities';
import { GetEmployeeByIdQuery } from '../../queries/employee';

@Injectable()
export class FindEmployeeByIdUseCase {
  constructor(
    @Inject('IEmployeeRepository') private readonly employeeRepository: IEmployeeRepository
  ) {}

  public async execute(query: GetEmployeeByIdQuery): Promise<Result<EmployeeEntity, string>> {
    const employeeResult = await this.employeeRepository.findById(query.id);

    if (employeeResult.err) {
      return Err(employeeResult.val);
    }

    return Ok(employeeResult.unwrap());
  }
}
