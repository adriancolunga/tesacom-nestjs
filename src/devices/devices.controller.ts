import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DevicesService } from './devices.service';
import { CreateDevicesDto, UpdateDevicesDto } from './dtos';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Device Module')
@Controller('devices')
export class DevicesController {
  constructor(private readonly deviceService: DevicesService) {}

  @Get()
  getAll() {
    return this.deviceService.getAll();
  }

  @Get(':serial')
  getOne(@Param('serial') serial: string) {
    return this.deviceService.getOne(serial);
  }

  @Post()
  createOne(@Body() dto: CreateDevicesDto) {
    return this.deviceService.createOne(dto);
  }

  @Put(':serial')
  updateOne(@Param('serial') serial: string, @Body() dto: UpdateDevicesDto) {
    this.deviceService.updateOne(serial, dto);
  }

  @Delete(':serial')
  deleteOne(@Param('serial') serial: string) {
    return this.deviceService.deleteOne(serial);
  }
}
