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
import { CreateUserDto, UpdateUserDto } from './dtos/';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('User Module')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':email')
  getOne(@Param('email') email: string) {
    return this.userService.getOne(email);
  }

  @Post()
  createOne(@Body() dto: CreateUserDto) {
    return this.userService.createOne(dto);
  }

  @Put(':email')
  updateOne(@Param('email') email: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateOne(email, dto);
  }

  @Delete(':email')
  deleteOne(@Param('email') email: string) {
    return this.userService.deleteOne(email);
  }
}
