import { Body, Controller, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { EmployeePrismaRepository } from '../../infrastructure/employee.prisma.repo';
import { CreateEmployeeUseCase, UpdateCredentialUseCase } from '../../application/use-cases';
import { CreateEmployeeDto, UpdateCredentialDto } from '../dto';

@Controller('employee')
export class EmployeeController {
  constructor(
    @Inject('IEmployeeRepository')
    private readonly repo: EmployeePrismaRepository,
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly updateCredentialUseCase: UpdateCredentialUseCase
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

  @Patch('update/password')
  async updatePassword(@Body() body: UpdateCredentialDto) {
    const id = await this.updateCredentialUseCase.execute(body);
    return { message: 'Employee password successfully updated', id };
  }
}
