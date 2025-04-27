import { Credential } from '@prisma/client';
import { CredentialEntity } from '../../domain/entities';
import { UniqueEntityID } from '../../../../shared/domain';
import { PasswordVo } from '../../domain/value-objects';

export class CredentialMapper {
  static async toEntityFromPersistance(prisma: Credential): Promise<CredentialEntity> {
    return CredentialEntity.create(
      {
        password: await PasswordVo.create(prisma.password),
        employeeId: prisma.employeeId,
      },
      new UniqueEntityID(prisma.id)
    );
  }

  static toUpdatePersistanceFromEntity(credential: CredentialEntity) {
    return {
      password: credential.password.value,
      employeeId: credential.employeeId,
    };
  }
}
