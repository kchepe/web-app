import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsEmail()
  email: string;
}
