import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class EmployeeDto {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsEmail()
  email: string;
}

export class CreateEmployeeDto extends EmployeeDto {
  @IsString()
  @MinLength(8)
  password: string;
}
