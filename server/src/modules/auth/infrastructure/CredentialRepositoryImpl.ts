import { Injectable } from '@nestjs/common';
import { ICredentialRepository } from '../domain/repositories/ICredentialRepository';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CredentialRepositoryImpl implements ICredentialRepository {
  constructor(private prisma: PrismaService) {}
  updatePassword: (employeeId: string, newPassword: string) => Promise<void>;
}
