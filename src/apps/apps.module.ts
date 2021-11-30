import { Module } from '@nestjs/common';
import { AppsService } from './apps.service';
import { AppsController } from './apps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apps } from './entity/apps.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apps])],
  providers: [AppsService],
  controllers: [AppsController],
})
export class AppsModule {}
