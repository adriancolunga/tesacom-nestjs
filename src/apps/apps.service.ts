import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAppDto, UpdateAppDto } from './dtos';
import { Apps } from './entity/apps.entity';

@Injectable()
export class AppsService {
  constructor(
    @InjectRepository(Apps)
    private readonly appsRepository: Repository<Apps>,
  ) {}

  async getAll(): Promise<Apps[]> {
    const allApps = await this.appsRepository.find();
    return allApps;
  }

  async getOne(id: number) {
    const byId = await this.appsRepository.findOne(id);
    return byId;
  }

  async createOne(dto: CreateAppDto) {
    const newApp = await this.appsRepository.create(dto);
    return await this.appsRepository.save(newApp);
  }

  async updateOne(id: number, dto: UpdateAppDto) {
    const app = await this.appsRepository.findOne(id);
    if (!app) throw new NotFoundException('Not Found');

    const assignedApp = Object.assign(app, dto);
    return await this.appsRepository.save(assignedApp);
  }

  async deleteOne(id: number) {
    return await this.appsRepository.delete(id);
  }
}
