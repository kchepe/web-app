import { Module } from '@nestjs/common';
import { EmployeeController } from './interface/controllers/EmployeeController';
import { EmployeeRepositoryImpl } from './infrastructure/EmployeeRepositoryImpl';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmployeeUseCase } from './application/use-cases';

@Module({
  controllers: [EmployeeController],
  providers: [
    EmployeeRepositoryImpl,
    PrismaService,
    CreateEmployeeUseCase,
    {
      provide: 'IEmployeeRepository',
      useClass: EmployeeRepositoryImpl,
    },
  ],
})
export class EmployeeModule {}
