import { Employee as PrismaEmployee, Credential as PrismaCredential } from '@prisma/client';
import { EmployeeEntity, CredentialEntity } from '../../domain/entities';

export class EmployeeMapper {
  static toDomain(prisma: PrismaEmployee & { credential?: PrismaCredential }): EmployeeEntity {
    const credential = prisma.credential
      ? CredentialEntity.create({
          password: prisma.credential.password,
        })
      : undefined;

    return EmployeeEntity.create({
      firstname: prisma.firstname,
      lastname: prisma.lastname,
      email: prisma.email,
      credential,
    });
  }

  static toPersistance(employee: EmployeeEntity) {
    const credential = employee.getCredential();
    return {
      id: employee.id.toString(),
      firstname: employee.firstname,
      lastname: employee.lastname,
      email: employee.email,
      credential,
    };
  }
}
