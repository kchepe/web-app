import { Controller, Get } from '@nestjs/common';
import { GetAllEmployeeUseCase } from 'src/application/employee';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly getAllEmployees: GetAllEmployeeUseCase) {}

  @Get('all')
  getAll() {
    return this.getAllEmployees.execute();
  }
}
