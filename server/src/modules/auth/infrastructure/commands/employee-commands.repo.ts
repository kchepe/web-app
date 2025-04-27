import { Injectable } from '@nestjs/common';
import { EmployeeEntity } from '../../domain/entities';
import {
  EmployeeCommandResponse,
  IEmployeeCommandsRepository,
} from '../../domain/repositories/commands/employee-commands.interface';
import { PrismaService } from '../../../../prisma/prisma.service';
import { EmployeeMapper } from '../../application/mappers';
import { tryCatch } from '../../../../shared/result';

@Injectable()
export class EmployeeCommandsRepository implements IEmployeeCommandsRepository {
  constructor(private prisma: PrismaService) {}

  public async create(employee: EmployeeEntity): Promise<EmployeeCommandResponse> {
    return tryCatch({
      process: async () => {
        const data = EmployeeMapper.toCreatePersistanceFromEntity(employee);
        const user = await this.prisma.employee.create({ data });
        return EmployeeMapper.toEntityFromPersistance(user);
      },
      onError: (e) => `Unexpected error occured while creating employee ${e}`,
    });
  }
}
