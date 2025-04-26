import { Inject, Injectable } from '@nestjs/common';
import { IEmployeeRepository } from 'src/modules/auth/domain/repositories';
import { Result, Err, Ok } from '../../../../../shared/result';
import { EmployeeEntity } from 'src/modules/auth/domain/entities';

@Injectable()
export class FindEmployeeByIdUseCase {
  constructor(
    @Inject('IEmployeeRepository') private readonly employeeRepository: IEmployeeRepository
  ) {}

  public async execute(employeeId: string): Promise<Result<EmployeeEntity, string>> {
    const employeeResult = await this.employeeRepository.findById(employeeId);

    if (employeeResult.err) {
      return Err(employeeResult.val);
    }

    return Ok(employeeResult.unwrap());
  }
}
