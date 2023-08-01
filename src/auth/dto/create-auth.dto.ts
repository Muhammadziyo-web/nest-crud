import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsAlpha,
} from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @MinLength(5)
  @MaxLength(16)
  @IsAlpha()
  username: string;
  @IsString()
  password: number;
  @IsEmail()
  email: string;
}
