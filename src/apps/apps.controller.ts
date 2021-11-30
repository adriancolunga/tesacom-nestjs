import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppsService } from './apps.service';
import { CreateAppDto, UpdateAppDto } from './dtos';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('App Module')
@Controller('apps')
export class AppsController {
  constructor(private readonly appService: AppsService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getOne(id);
  }

  @Post()
  createOne(@Body() dto: CreateAppDto) {
    return this.appService.createOne(dto);
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAppDto) {
    return this.appService.updateOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteOne(id);
  }
}
