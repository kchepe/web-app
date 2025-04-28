import { Inject, Injectable } from '@nestjs/common';
import { UniqueEntityID } from '../../../../shared/domain';
import { IEmployeeQueriesRepository } from '../repositories';

@Injectable()
export class EmployeeIdService {
  constructor(
    @Inject('IEmployeeQueriesRepository')
    private readonly employeeQueriesRepository: IEmployeeQueriesRepository
  ) {}

  async generate(firstname: string, lastname: string): Promise<UniqueEntityID> {
    const initials = `${firstname[0]}${lastname[0]}`.toUpperCase();
    const year = new Date().getFullYear();

    const lastEmployeeResult = await this.employeeQueriesRepository.getLastCreatedEmployee();
    let lastId = '00000';

    if (lastEmployeeResult.ok && lastEmployeeResult.val?.id) {
      const parts = lastEmployeeResult.val.id.toString().split('-');
      lastId = parts[2] ?? '00000';
    }

    const nextId = String(parseInt(lastId, 10) + 1).padStart(5, '0');
    const customId = `${initials}-${year}-${nextId}`;

    return new UniqueEntityID(customId);
  }
}
