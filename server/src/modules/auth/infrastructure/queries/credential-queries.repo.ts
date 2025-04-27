import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CredentialMapper } from '../../application/mappers';
import { CredentialEntity } from '../../domain/entities';
import { ICredentialQueriesRepository } from '../../domain/repositories';

@Injectable()
export class CredentialQueriesRepository implements ICredentialQueriesRepository {
  constructor(private prisma: PrismaService) {}

  async getCredentialByEmployeeId(employeeId: string): Promise<CredentialEntity | null> {
    const credential = await this.prisma.credential.findUnique({ where: { employeeId } });
    if (!credential) {
      return null;
    }
    return CredentialMapper.toEntityFromPersistance(credential);
  }
}
