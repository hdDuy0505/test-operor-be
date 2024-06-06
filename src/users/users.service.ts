import { Inject, Injectable } from '@nestjs/common';

import { Meeting } from '~/meetings/meetings.entity';

import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: typeof User,
  ) {}

  async getAll(page: number, perPage: number) {
    try {
      const offset = (page - 1) * perPage;
      const limit = perPage;

      const data = await this.userRepository.findAndCountAll({
        include: [{ model: Meeting }],
        offset,
        limit,
        distinct: true,
        order: [
          ['createdAt', 'DESC'],
          [
            {
              model: Meeting,
              as: 'meetings',
            },
            'start_day',
            'ASC',
          ],
        ],
      });

      return {
        data: data.rows,
        page: page,
        perPage: perPage,
        totalPages: Math.ceil(data.count / perPage),
      };
    } catch (error) {
      console.log('Error get user list: ', error);
      throw new Error('Error get user list: ' + error);
    }
  }
}
