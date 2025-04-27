import { Injectable } from '@nestjs/common';
import { EmployeeQueryResponse, IEmployeeQueriesRepository } from '../../domain/repositories';
import { PrismaService } from '../../../../prisma/prisma.service';
import { Err, tryCatch } from '../../../../shared/result';
import { EmployeeMapper } from '../../application/mappers';

@Injectable()
export class EmployeeQueriesRepository implements IEmployeeQueriesRepository {
  constructor(private prisma: PrismaService) {}

  public async findById(id: string): Promise<EmployeeQueryResponse> {
    return tryCatch({
      process: async () => {
        const employee = await this.prisma.employee.findUnique({ where: { id } });
        if (!employee) return Err(`Employee not found with id: ${id}`);
        return EmployeeMapper.toEntityFromPersistance(employee);
      },
      onError: () => 'Unexpected error occurred while fetching employee',
    });
  }
  public async getLastCreatedEmployee(): Promise<EmployeeQueryResponse> {
    return tryCatch({
      process: async () => {
        const latestEmployee = await this.prisma.employee.findFirst({
          orderBy: { createdAt: 'desc' },
        });
        if (!latestEmployee) return Err('Employee not found');
        return EmployeeMapper.toEntityFromPersistance(latestEmployee);
      },
      onError: () => 'Unexpected error occurred while fetching employee',
    });
  }

  public async findByEmail(email: string): Promise<EmployeeQueryResponse> {
    return tryCatch({
      process: async () => {
        const existingEmployee = await this.prisma.employee.findUnique({ where: { email } });
        if (!existingEmployee) return Err(`Employee not found with email: ${email}`);
        return EmployeeMapper.toEntityFromPersistance(existingEmployee);
      },
      onError: () => 'Unexpected error occurred while fetching employee',
    });
  }
}
