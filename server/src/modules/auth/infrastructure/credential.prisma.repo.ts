import { Injectable } from '@nestjs/common';
import { ICredentialRepository } from '../domain/repositories/ICredentialRepository';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CredentialPrismaRepository implements ICredentialRepository {
  constructor(private prisma: PrismaService) {}
  updatePassword: (employeeId: string, newPassword: string) => Promise<void>;
}
