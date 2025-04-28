import { Module } from '@nestjs/common';
import { EmployeeController } from './interface/controllers/employee.controller';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CreateEmployeeUseCase,
  FindEmployeeByIdUseCase,
  UpdateCredentialUseCase,
} from './application/use-cases';
import { EmployeeIdService } from './domain/services';
import {
  CredentialCommandsRepository,
  CredentialQueriesRepository,
  EmployeeCommandsRepository,
  EmployeeQueriesRepository,
} from './infrastructure';
import { EmployeeFactory } from './domain/factories';

@Module({
  controllers: [EmployeeController],
  providers: [
    PrismaService,
    CreateEmployeeUseCase,
    FindEmployeeByIdUseCase,
    EmployeeFactory,
    EmployeeIdService,
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
