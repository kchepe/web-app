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
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly updateCredentialUseCase: UpdateCredentialUseCase,
    private readonly findEmployeeByIdUseCase: FindEmployeeByIdUseCase
  ) {}

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ApiResponse<EmployeeDto>> {
    const query = EmployeeMapper.toQueryFromDto(id);

    const result = await this.findEmployeeByIdUseCase.execute(query);

    if (!result.ok) {
      return errorResponse(result.val.toString());
    }

    return successResponse(
      'Employee fetched successfully',
      EmployeeMapper.toDtoFromEntity(result.val)
    );
  }

  @Post('create')
  async addEmployee(@Body() body: CreateEmployeeDto): Promise<ApiResponse<string>> {
    const command = EmployeeMapper.toCommandFromDto(body);

    const result = await this.createEmployeeUseCase.execute(command);

    if (!result.ok) {
      return errorResponse(result.val.toString());
    }

    return successResponse('Employee created successfully', result.val.id.toString());
  }

  @Patch('update/password')
  async updatePassword(@Body() body: UpdateCredentialDto) {
    const id = await this.updateCredentialUseCase.execute(body);
    return { message: 'Employee password successfully updated', id };
  }
}
