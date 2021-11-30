import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRository: Repository<Users>,
  ) {}

  async getAll(): Promise<Users[]> {
    const allUsers = await this.usersRository.find();
    return allUsers;
  }

  async getOne(email: string) {
    const byEmail = await this.usersRository.findOne(email);
    if (!byEmail) throw new NotFoundException('Not Found');

    const { password, ...userData } = byEmail;

    return userData;
  }

  async createOne(dto: CreateUserDto) {
    const newUser = await this.usersRository.create(dto);
    const { password, ...data } = newUser;

    return await this.usersRository.save(data /* { reload: false } */);
  }

  async updateOne(email: string, dto: UpdateUserDto) {
    const user = await this.usersRository.findOne(email);

    if (!user) throw new NotFoundException('Not Found');

    const assignedUser = Object.assign(user, dto);
    const { password, ...userData } = assignedUser;

    return await this.usersRository.save(userData);
  }

  async deleteOne(email: string) {
    return await this.usersRository.delete(email);
  }
}
