import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  post(user: UserDto): Promise<User> {
    return this.userRepository.postUser(user);
  }

  get(user: UserDto): Promise<User[]> {
    return this.userRepository.getUser(user);
  }
}
