import { Module } from '@nestjs/common';
import { EmployeeController } from './interface/controllers/employee.controller';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CreateEmployeeUseCase,
  FindEmployeeByIdUseCase,
  UpdateCredentialUseCase,
} from './application/use-cases';
import { CredentialPrismaRepository, EmployeePrismaRepository } from './infrastructure';
import { GenerateEmployeeId } from './domain/services';

@Module({
  controllers: [EmployeeController],
  providers: [
    EmployeePrismaRepository,
    PrismaService,
    CreateEmployeeUseCase,
    FindEmployeeByIdUseCase,
    GenerateEmployeeId,
    {
      provide: 'ICredentialRepository',
      useClass: CredentialPrismaRepository,
    },
    UpdateCredentialUseCase,
    {
      provide: 'IEmployeeRepository',
      useClass: EmployeePrismaRepository,
    },
  ],
})
export class EmployeeModule {}
