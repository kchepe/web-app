import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { EmployeePrismaRepository } from '../../infrastructure/employee.prisma.repo';
import { CreateEmployeeUseCase } from '../../application/use-cases';
import { CreateEmployeeDto } from '../dto';

@Controller('employee')
export class EmployeeController {
  constructor(
    @Inject('IEmployeeRepository')
    private readonly repo: EmployeePrismaRepository,
    private readonly createEmployeeUseCase: CreateEmployeeUseCase
  ) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    const employee = await this.repo.findById(id);

    if (!employee) return { message: 'Not found' };

    return {
      id: employee.id,
      name: employee.firstname,
    };
  }

  @Post('create')
  async addEmployee(@Body() body: CreateEmployeeDto) {
    const id = await this.createEmployeeUseCase.execute(body);
    return { message: 'Employee created successfully', id };
  }
}
