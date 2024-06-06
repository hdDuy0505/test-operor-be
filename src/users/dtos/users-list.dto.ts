import { Type } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { User } from '../users.entity';

export class ListUsersParam {
  @ApiPropertyOptional({
    default: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @Min(1)
  page?: number;

  @ApiPropertyOptional({
    default: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  @Max(10)
  perPage?: number;
}

export interface UserListResponse {
  data: User[];
  page: number;
  perPage: number;
  totalPages: number;
}
