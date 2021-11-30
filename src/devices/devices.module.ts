import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Devices } from './entity/devices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Devices])],
  providers: [DevicesService],
  controllers: [DevicesController],
})
export class DevicesModule {}
