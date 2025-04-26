import { Injectable } from '@nestjs/common';
import { IEmployeeRepository } from '../domain/repositories';
import { EmployeeEntity } from '../domain/entities';
import { PrismaService } from '../../../prisma/prisma.service';
import { EmployeeMapper } from '../application/mappers/employee.mapper';
import { Err, Result, tryCatch } from '../../../shared/result';

@Injectable()
export class EmployeePrismaRepository implements IEmployeeRepository {
  constructor(private prisma: PrismaService) {}

  public async create(employee: EmployeeEntity): Promise<EmployeeEntity> {
    const data = EmployeeMapper.toCreatePersistanceFromEntity(employee);

    const user = await this.prisma.employee.create({ data });

    return EmployeeMapper.toEntityFromPersistance(user);
  }

  public async findById(id: string): Promise<Result<EmployeeEntity, string>> {
    return tryCatch({
      process: async () => {
        const employee = await this.prisma.employee.findUnique({ where: { id } });
        if (!employee) return Err('Employee not found');
        return EmployeeMapper.toEntityFromPersistance(employee);
      },
      onError: () => 'Unexpected error occurred while fetching employee',
    });
  }
  public async getLastCreadtedEmployee(): Promise<EmployeeEntity | null> {
    const latestEmployee = await this.prisma.employee.findFirst({ orderBy: { id: 'desc' } });
    if (!latestEmployee) return null;
    return EmployeeMapper.toEntityFromPersistance(latestEmployee);
  }

  public async findByEmail(email: string): Promise<EmployeeEntity | null> {
    const existingEmployee = await this.prisma.employee.findUnique({ where: { email } });
    if (!existingEmployee) return null;
    return EmployeeMapper.toEntityFromPersistance(existingEmployee);
  }
}
