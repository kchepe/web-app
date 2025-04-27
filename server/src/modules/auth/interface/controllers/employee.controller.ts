import { Body, Controller, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import {
  CreateEmployeeUseCase,
  FindEmployeeByIdUseCase,
  ICreateEmployeeUsecase,
  IFindEmployeeByIdUseCase,
  IUpdateCredentialUseCase,
  UpdateCredentialUseCase,
} from '../../application/use-cases';
import { CreateEmployeeDto, EmployeeDto, UpdateCredentialDto } from '../dto';
import { EmployeeMapper } from '../../application/mappers';
import { ApiResponse, errorResponse, successResponse } from '../../../../shared/utils/api-response';
import { UpdatePasswordCommand } from '../../application/command';

@Controller('employee')
export class EmployeeController {
  private readonly createEmployeeUseCase: ICreateEmployeeUsecase;
  private readonly updateCredentialUseCase: IUpdateCredentialUseCase;
  private readonly findEmployeeByIdUseCase: IFindEmployeeByIdUseCase;

  constructor(
    createEmployeeUseCase: CreateEmployeeUseCase,
    updateCredentialUseCase: UpdateCredentialUseCase,
    findEmployeeByIdUseCase: FindEmployeeByIdUseCase
  ) {
    this.createEmployeeUseCase = createEmployeeUseCase;
    this.updateCredentialUseCase = updateCredentialUseCase;
    this.findEmployeeByIdUseCase = findEmployeeByIdUseCase;
  }

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
      return errorResponse(result.val);
    }
    return successResponse('Employee created successfully', result.val);
  }

  @Patch('update/password')
  async updatePassword(@Body() body: UpdateCredentialDto): Promise<ApiResponse<string>> {
    const command = new UpdatePasswordCommand(body.employeeId, body.newPassword);
    const result = await this.updateCredentialUseCase.execute(command);

    if (!result.ok) {
      return errorResponse(result.val as string);
    }

    return successResponse('Employee password succesfully updated!');
  }
}
