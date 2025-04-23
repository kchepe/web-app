import { IsString, MinLength } from 'class-validator';

export class UpdateCredentialDto {
  @IsString()
  employeeId: string;

  @IsString()
  @MinLength(8)
  newPassword: string;
}
