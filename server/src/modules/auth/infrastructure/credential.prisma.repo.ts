import { Injectable } from '@nestjs/common';
import { ICredentialRepository } from '../domain/repositories/ICredentialRepository';
import { PrismaService } from '../../../prisma/prisma.service';
import { CredentialMapper } from '../application/mappers';
import { CredentialEntity } from '../domain/entities';

@Injectable()
export class CredentialPrismaRepository implements ICredentialRepository {
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

  async getCredentialByEmployeeId(employeeId: string): Promise<CredentialEntity | null> {
    const credential = await this.prisma.credential.findUnique({ where: { employeeId } });
    if (!credential) {
      return null;
    }
    return CredentialMapper.toEntityFromPersistance(credential);
  }
}
