import { Module } from '@nestjs/common';

import { databaseProviders } from '~/database/database.providers';

import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Module({
  providers: [
    ...databaseProviders,
    UsersService,
    {
      provide: 'UserRepository',
      useValue: User,
    },
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
