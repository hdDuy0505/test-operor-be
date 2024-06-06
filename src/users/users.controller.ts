import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ListUsersParam, UserListResponse } from './dtos/users-list.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  async findAll(@Query() params: ListUsersParam) {
    const { page = 1, perPage = 10 } = params;

    const data: UserListResponse = await this.usersService.getAll(+page, +perPage);

    return data;
  }
}
