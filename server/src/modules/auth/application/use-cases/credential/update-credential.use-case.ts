import { Inject, Injectable } from '@nestjs/common';
import { PasswordVo } from '../../../domain/value-objects';
import { UpdateCredentialDto } from 'src/modules/auth/interface';
import { ICredentialCommandsRepository } from 'src/modules/auth/domain/repositories/commands/credential-commands.interface';
import { ICredentialQueriesRepository } from '../../../domain/repositories';

@Injectable()
export class UpdateCredentialUseCase {
  constructor(
    @Inject('ICredentialCommandsRepository')
    private readonly credentialCommandsRepository: ICredentialCommandsRepository,
    @Inject('ICredentialQueriesRepository')
    private readonly credentialQueriesRepository: ICredentialQueriesRepository
  ) {}

  async execute({ employeeId, newPassword }: UpdateCredentialDto) {
    const existingCredential =
      await this.credentialQueriesRepository.getCredentialByEmployeeId(employeeId);

    if (!existingCredential) {
      throw new Error('No existing employee for this employee Id');
    }

    const hashedPassword = await PasswordVo.create(newPassword);
    existingCredential.updatePassword(hashedPassword);

    await this.credentialCommandsRepository.updatePassword(existingCredential);
  }
}
