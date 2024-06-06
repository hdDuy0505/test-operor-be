import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

import { ConfigService } from '~/config/config.service';
import { Meeting } from '~/meetings/meetings.entity';
import { User } from '~/users/users.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.sequelizeOrmConfig,
        dialect: configService.sequelizeOrmConfig.dialect as Dialect,
        logging: false,
      });

      // Models
      sequelize.addModels([User, Meeting]);

      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
