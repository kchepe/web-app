import { Injectable } from '@nestjs/common';
import { IEmployeeRepository } from '../domain/repositories';
import { EmployeeEntity } from '../domain/entities';
import { PrismaService } from '../../../prisma/prisma.service';
import { EmployeeMapper } from '../application/mappers/EmployeeMapper';
import { Employee } from '@prisma/client';

@Injectable()
export class EmployeeRepositoryImpl implements IEmployeeRepository {
  constructor(private prisma: PrismaService) {}

  async create(employee: EmployeeEntity): Promise<Employee> {
    const { email, firstname, lastname, credential, id } = EmployeeMapper.toPersistance(employee);

    const user = await this.prisma.employee.create({
      data: {
        firstname,
        lastname,
        email,
        id,
        Credential: {
          create: {
            password: credential.password,
            id: credential.id.toString(),
          },
        },
      },
    });

    return user;
  }

  async findById(id: string): Promise<EmployeeEntity | null> {
    const data = await this.prisma.employee.findUnique({ where: { id } });
    if (!data) return null;
    return EmployeeMapper.toDomain(data);
  }
}
