import { Inject, Injectable } from '@nestjs/common';
import { ICredentialRepository } from 'src/modules/auth/domain/repositories/ICredentialRepository';
import { PasswordVo } from '../../../domain/value-objects';
import { UpdateCredentialDto } from 'src/modules/auth/interface';

@Injectable()
export class UpdateCredentialUseCase {
  constructor(
    @Inject('ICredentialRepository') private readonly credentialRepository: ICredentialRepository
  ) {}

  async execute({ employeeId, newPassword }: UpdateCredentialDto) {
    const existingCredential =
      await this.credentialRepository.getCredentialByEmployeeId(employeeId);

    if (!existingCredential) {
      throw new Error('No existing employee for this employee Id');
    }

    const hashedPassword = await PasswordVo.create(newPassword);
    existingCredential.updatePassword(hashedPassword);

    await this.credentialRepository.updatePassword(existingCredential);
  }
}
