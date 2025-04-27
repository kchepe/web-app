import { Inject, Injectable } from '@nestjs/common';
import { PasswordVo } from '../../../domain/value-objects';
import {
  ICredentialCommandsRepository,
  IUpdatePasswordResponse,
} from 'src/modules/auth/domain/repositories/commands/credential-commands.interface';
import { ICredentialQueriesRepository } from '../../../domain/repositories';
import { UpdatePasswordCommand } from '../../command';
import { Err, Ok } from '../../../../../shared/result';

export interface IUpdateCredentialUseCase {
  execute: (input: UpdatePasswordCommand) => Promise<IUpdatePasswordResponse>;
}

@Injectable()
export class UpdateCredentialUseCase implements IUpdateCredentialUseCase {
  constructor(
    @Inject('ICredentialCommandsRepository')
    private readonly credentialCommandsRepository: ICredentialCommandsRepository,
    @Inject('ICredentialQueriesRepository')
    private readonly credentialQueriesRepository: ICredentialQueriesRepository
  ) {}

  async execute(command: UpdatePasswordCommand): Promise<IUpdatePasswordResponse> {
    const existingCredential = await this.credentialQueriesRepository.getCredentialByEmployeeId(
      command.employeeId
    );

    if (!existingCredential.ok) {
      return Err(existingCredential.val.toString());
    }

    const existingCredentialUnwrap = existingCredential.unwrap();

    const hashedPassword = await PasswordVo.create(command.newPassword);
    existingCredentialUnwrap.updatePassword(hashedPassword);

    await this.credentialCommandsRepository.updatePassword(existingCredentialUnwrap);

    return Ok.EMPTY;
  }
}
