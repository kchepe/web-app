import { CredentialEntity, EmployeeEntity } from '../../../domain/entities';
import { CreateEmployeeDto, EmployeeDto } from '../../../interface';
import { Inject, Injectable } from '@nestjs/common';
import { IEmployeeRepository } from '../../../domain/repositories';
import { EmailVo, PasswordVo } from '../../../domain/value-objects';
import { GenerateEmployeeId } from '../../../domain/services';
import { EmployeeMapper } from '../../mappers';

@Injectable()
export class CreateEmployeeUseCase {
  constructor(
    @Inject('IEmployeeRepository') private readonly employeeRepository: IEmployeeRepository,
    private readonly generateEmployeeIdService: GenerateEmployeeId
  ) {}

  async execute(input: CreateEmployeeDto): Promise<EmployeeDto> {
    const existingEmployee = await this.employeeRepository.findByEmail(input.email);
    if (!!existingEmployee) {
      throw new Error('Email already in use');
    }

    const password = await PasswordVo.create(input.password);
    const employeeId = await this.generateEmployeeIdService.generate(
      input.firstname,
      input.lastname
    );

    const newEmployee = EmployeeEntity.create(
      {
        firstname: input.firstname,
        lastname: input.lastname,
        email: EmailVo.create(input.email),
        credential: CredentialEntity.create({ password }),
      },
      employeeId
    );

    const employee = await this.employeeRepository.create(newEmployee);

    return EmployeeMapper.toDtoFromEntity(employee);
  }
}
