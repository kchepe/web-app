import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import {
  ICredentialCommandsRepository,
  IUpdatePasswordResponse,
} from '../../domain/repositories/commands/credential-commands.interface';
import { CredentialEntity } from '../../domain/entities';
import { CredentialMapper } from '../../application/mappers';
import { Ok, tryCatch } from '../../../../shared/result';

@Injectable()
export class CredentialCommandsRepository implements ICredentialCommandsRepository {
  constructor(private prisma: PrismaService) {}
  async updatePassword(credentialEntity: CredentialEntity): Promise<IUpdatePasswordResponse> {
    return tryCatch({
      process: async () => {
        const { employeeId, password } =
          CredentialMapper.toUpdatePersistanceFromEntity(credentialEntity);
        await this.prisma.credential.update({
          where: { employeeId },
          data: { password },
        });
        return Ok.EMPTY;
      },
      onError: (e) => `Unexpected error occured while updating employee password: ${e}`,
    });
  }
}
