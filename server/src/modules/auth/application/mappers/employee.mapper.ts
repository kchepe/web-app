import { Employee as PrismaEmployee, Credential as PrismaCredential } from '@prisma/client';
import { EmployeeEntity, CredentialEntity } from '../../domain/entities';
import { EmailVo, PasswordVo } from '../../domain/value-objects';
import { EmployeeDto } from '../../interface';
import { UniqueEntityID } from '../../../../shared/domain';
import { CredentialMapper } from './credential.mapper';

export class EmployeeMapper {
  static async toEntityFromPersistance(
    prisma: PrismaEmployee & { credential?: PrismaCredential }
  ): Promise<EmployeeEntity> {
    const credential = prisma.credential
      ? await CredentialMapper.toEntityFromPersistance(prisma.credential)
      : undefined;

    return EmployeeEntity.create(
      {
        firstname: prisma.firstname,
        lastname: prisma.lastname,
        email: EmailVo.create(prisma.email),
        credential,
      },
      new UniqueEntityID(prisma.id)
    );
  }

  static toCreatePersistanceFromEntity(employee: EmployeeEntity) {
    const credential = employee.getCredential();

    return {
      id: employee.id.toString(),
      firstname: employee.firstname,
      lastname: employee.lastname,
      email: employee.email.value,
      Credential: {
        create: { password: credential.password.value, id: credential.id.toString() },
      },
    };
  }

  static toUpdatePersistanceFromEntity(employee: EmployeeEntity) {
    return {
      firstname: employee.firstname,
      lastname: employee.lastname,
      email: employee.email.value,
    };
  }

  static toDtoFromEntity(employee: EmployeeEntity): EmployeeDto {
    return {
      id: employee.id.toString(),
      firstname: employee.firstname,
      lastname: employee.lastname,
      email: employee.email.value,
    };
  }
}
