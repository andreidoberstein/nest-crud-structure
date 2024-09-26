import { IsEmail, IsOptional, IsString } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @IsOptional()
  phone?: string;
}
