import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDevicesDto, UpdateDevicesDto } from './dtos';
import { Devices } from './entity/devices.entity';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Devices)
    private readonly devicesRepository: Repository<Devices>,
  ) {}

  async getAll(): Promise<Devices[]> {
    const allDevices = await this.devicesRepository.find();
    return allDevices;
  }

  async getOne(serial: string) {
    const bySerial = await this.devicesRepository.findOne(serial);
    return bySerial;
  }

  async createOne(dto: CreateDevicesDto) {
    const newDevice = await this.devicesRepository.create(dto);
    return await this.devicesRepository.save(newDevice);
  }

  async updateOne(serial: string, dto: UpdateDevicesDto) {
    const device = await this.devicesRepository.findOne(serial);
    if (!device) throw new NotFoundException('Not Found');

    const assignedDevice = Object.assign(device, dto);
    return await this.devicesRepository.save(assignedDevice);
  }

  async deleteOne(serial: string) {
    return await this.devicesRepository.delete(serial);
  }
}
