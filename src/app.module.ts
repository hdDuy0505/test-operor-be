import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { MeetingsModule } from './meetings/meetings.module';

@Module({
  imports: [
    NestConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    DatabaseModule,
    ConfigModule,
    MeetingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
