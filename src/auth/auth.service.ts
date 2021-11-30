import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dtos';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginUserDto) {
    const user = await this.userRepository.findOne(dto.email);

    if (!user) throw new UnauthorizedException('Wrong Credentials');
    if (dto.password !== user.password)
      throw new UnauthorizedException('Wrong Credentials');

    return this.jwtService.sign({
      email: user.email,
      password: user.password,
    });
  }
}
