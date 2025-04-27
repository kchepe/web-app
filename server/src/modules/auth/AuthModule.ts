import { Module } from '@nestjs/common';
import { EmployeeController } from './interface/controllers/employee.controller';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CreateEmployeeUseCase,
  FindEmployeeByIdUseCase,
  UpdateCredentialUseCase,
} from './application/use-cases';
import { GenerateEmployeeId } from './domain/services';
import {
  CredentialCommandsRepository,
  CredentialQueriesRepository,
  EmployeeCommandsRepository,
  EmployeeQueriesRepository,
} from './infrastructure';

@Module({
  controllers: [EmployeeController],
  providers: [
    PrismaService,
    CreateEmployeeUseCase,
    FindEmployeeByIdUseCase,
    GenerateEmployeeId,
    UpdateCredentialUseCase,
    {
      provide: 'ICredentialCommandsRepository',
      useClass: CredentialCommandsRepository,
    },
    {
      provide: 'IEmployeeCommandsRepository',
      useClass: EmployeeCommandsRepository,
    },
    {
      provide: 'ICredentialQueriesRepository',
      useClass: CredentialQueriesRepository,
    },
    {
      provide: 'IEmployeeQueriesRepository',
      useClass: EmployeeQueriesRepository,
    },
  ],
})
export class EmployeeModule {}
