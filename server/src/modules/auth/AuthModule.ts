import { Module } from '@nestjs/common';
import { EmployeeController } from './interface/controllers/EmployeeController';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmployeeUseCase, UpdateCredentialUseCase } from './application/use-cases';
import { CredentialPrismaRepository, EmployeePrismaRepository } from './infrastructure';
import { GenerateEmployeeId } from './domain/services';

@Module({
  controllers: [EmployeeController],
  providers: [
    EmployeePrismaRepository,
    PrismaService,
    CreateEmployeeUseCase,
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
