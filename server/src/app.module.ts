import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './interfaces/employee.controller';
import { GetAllEmployeeUseCase } from './application/employee';
import { InMemoryEmplyeeRepository } from './infrastructure/repositories/employee.repo.impl';
import { EmployeeBaseRepo } from './domain/employee/repositories/base/employee-base.repo';

@Module({
  imports: [],
  controllers: [AppController, EmployeeController],
  providers: [
    AppService,
    GetAllEmployeeUseCase,
    { useClass: InMemoryEmplyeeRepository, provide: EmployeeBaseRepo },
  ],
})
export class AppModule {}
