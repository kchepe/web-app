import { Injectable } from '@nestjs/common';
import { IEmployeeRepository } from '../domain/repositories';
import { EmployeeEntity } from '../domain/entities';
import { PrismaService } from '../../../prisma/prisma.service';
import { EmployeeMapper } from '../application/mappers/employee.mapper';
import { Err, tryCatch } from '../../../shared/result';
import { EmployeeQueryResponse } from '../domain/repositories/IEmployeeRepository';

@Injectable()
export class EmployeePrismaRepository implements IEmployeeRepository {
  constructor(private prisma: PrismaService) {}

  public async create(employee: EmployeeEntity): Promise<EmployeeQueryResponse> {
    return tryCatch({
      process: async () => {
        const data = EmployeeMapper.toCreatePersistanceFromEntity(employee);
        const user = await this.prisma.employee.create({ data });
        return EmployeeMapper.toEntityFromPersistance(user);
      },
      onError: (e) => `Unexpected error occured while creating employee ${e}`,
    });
  }

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
