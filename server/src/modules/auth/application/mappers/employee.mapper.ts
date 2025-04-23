import { Employee as PrismaEmployee, Credential as PrismaCredential } from '@prisma/client';
import { EmployeeEntity, CredentialEntity } from '../../domain/entities';
import { EmailVo, PasswordVo } from '../../domain/value-objects';
import { EmployeeDto } from '../../interface';
import { UniqueEntityID } from '../../../../shared/domain';

export class EmployeeMapper {
  static async toEntityFromPersistance(
    prisma: PrismaEmployee & { credential?: PrismaCredential }
  ): Promise<EmployeeEntity> {
    const credential = prisma.credential
      ? CredentialEntity.create({
          password: await PasswordVo.create(prisma.credential.password),
        })
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
    const credential = employee.getCredential();

    return {
      firstname: employee.firstname,
      lastname: employee.lastname,
      email: employee.email.value,
      Credential: {
        update: { password: credential.password.value },
      },
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
