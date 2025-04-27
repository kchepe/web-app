import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CredentialMapper } from '../../application/mappers';
import { CredentialEntity } from '../../domain/entities';
import {
  ICredentialQueriesRepository,
  IGetCredentialByEmployeeId,
} from '../../domain/repositories';
import { Err, tryCatch } from '../../../../shared/result';

@Injectable()
export class CredentialQueriesRepository implements ICredentialQueriesRepository {
  constructor(private prisma: PrismaService) {}

  async getCredentialByEmployeeId(employeeId: string): Promise<IGetCredentialByEmployeeId> {
    return tryCatch({
      process: async () => {
        const credential = await this.prisma.credential.findUnique({ where: { employeeId } });
        if (!credential) return Err(`Employee not found with id: ${employeeId}`);
        return CredentialMapper.toEntityFromPersistance(credential);
      },
      onError: (e) => `Unexpected error occurred while fetching credential: ${e}`,
    });
  }
}
