import { Employee as PrismaEmployee, Credential as PrismaCredential } from '@prisma/client';
import { EmployeeEntity, CredentialEntity } from '../../domain/entities';
import { EmailVo, PasswordVo } from '../../domain/value-objects';

export class EmployeeMapper {
  static async toDomain(
    prisma: PrismaEmployee & { credential?: PrismaCredential }
  ): Promise<EmployeeEntity> {
    const credential = prisma.credential
      ? CredentialEntity.create({
          password: await PasswordVo.create(prisma.credential.password),
        })
      : undefined;

    return EmployeeEntity.create({
      firstname: prisma.firstname,
      lastname: prisma.lastname,
      email: EmailVo.create(prisma.email),
      credential,
    });
  }

  static toPersistance(employee: EmployeeEntity) {
    const credential = employee.getCredential();
    return {
      id: employee.id.toString(),
      firstname: employee.firstname,
      lastname: employee.lastname,
      email: employee.email.email,
      credential: { password: credential.password.value, id: credential.id.toString() },
    };
  }
}
