import { Module } from '@nestjs/common';
import { EmployeeController } from './interface/controllers/EmployeeController';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmployeeUseCase } from './application/use-cases';
import { EmployeePrismaRepository } from './infrastructure';
import { GenerateEmployeeId } from './domain/services';

@Module({
  controllers: [EmployeeController],
  providers: [
    EmployeePrismaRepository,
    PrismaService,
    CreateEmployeeUseCase,
    GenerateEmployeeId,
    {
      provide: 'IEmployeeRepository',
      useClass: EmployeePrismaRepository,
    },
  ],
})
export class EmployeeModule {}
