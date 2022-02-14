import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('product')
  store(@Body() request: UserDto, @Res() response: Response) {
    const user = this.userService.post(request);
    response.status(201).json(user);
  }

  @Get()
  show(@Body() request: UserDto, @Res() response: Response) {
    const user = this.userService.get(request);
    response.status(200).json(user);
  }
}
