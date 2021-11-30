import { PartialType } from "@nestjs/mapped-types";
import { CreateDevicesDto } from ".";

export class UpdateDevicesDto extends PartialType(CreateDevicesDto) {}