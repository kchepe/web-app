import { Body, Controller, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import {
  CreateEmployeeUseCase,
  FindEmployeeByIdUseCase,
  UpdateCredentialUseCase,
} from '../../application/use-cases';
import { CreateEmployeeDto, EmployeeDto, UpdateCredentialDto } from '../dto';
import { EmployeeMapper } from '../../application/mappers';
import { ApiResponse, errorResponse, successResponse } from '../../../../shared/utils/api-response';
@Controller('employee')
export class EmployeeController {
  constructor(
    @Inject('IEmployeeRepository')
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly updateCredentialUseCase: UpdateCredentialUseCase,
    private readonly findEmployeeByIdUseCase: FindEmployeeByIdUseCase
  ) {}

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ApiResponse<EmployeeDto>> {
    const result = await this.findEmployeeByIdUseCase.execute(id);

    if (!result.ok) {
      return errorResponse(result.val.toString());
    }

    return successResponse(
      'Employee fetched successfully',
      EmployeeMapper.toDtoFromEntity(result.val)
    );
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
