import { PartialType } from '@nestjs/mapped-types';
import { CreateAppDto } from '.';

export class UpdateAppDto extends PartialType(CreateAppDto) {}
