import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDevicesDto {
  @IsString()
  @IsNotEmpty()
  serial: string;

  @IsString()
  @IsNotEmpty()
  alias: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsInt()
  @IsNotEmpty()
  code: number;
}
