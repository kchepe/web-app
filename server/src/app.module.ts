import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GetAllEmployeeUseCase } from './application/employee';
import { InMemoryEmplyeeRepository } from './infrastructure/repositories/employee.repo.impl';
import { EmployeeBaseRepo } from './domain/employee/repositories/base/employee-base.repo';

@Module({
  imports: [PrismaModule],
  providers: [
    GetAllEmployeeUseCase,
    { useClass: InMemoryEmplyeeRepository, provide: EmployeeBaseRepo },
  ],
})
export class AppModule {}
