import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ICredentialCommandsRepository } from '../../domain/repositories/commands/credential-commands.interface';
import { CredentialEntity } from '../../domain/entities';
import { CredentialMapper } from '../../application/mappers';

@Injectable()
export class CredentialCommandsRepository implements ICredentialCommandsRepository {
  constructor(private prisma: PrismaService) {}
  async updatePassword(credentialEntity: CredentialEntity): Promise<CredentialEntity | null> {
    const credential = await this.prisma.credential.update({
      where: { employeeId: credentialEntity.employeeId },
      data: { password: credentialEntity.password.value },
    });

    if (!credential) {
      return null;
    }
    return CredentialMapper.toEntityFromPersistance(credential);
  }
}
