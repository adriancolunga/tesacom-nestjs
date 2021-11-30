import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAppDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  icon: string;
}
