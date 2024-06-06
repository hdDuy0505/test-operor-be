import { Column, CreatedAt, DataType, Default, HasMany, Model, Table } from 'sequelize-typescript';

import { Meeting } from '~/meetings/meetings.entity';

@Table({
  tableName: 'users',
  timestamps: false,
  paranoid: true,
})
export class User extends Model<User> {
  @Column({
    field: 'id',
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ field: 'first_name', type: DataType.STRING })
  firstName: string;

  @Column({ field: 'last_name', type: DataType.STRING })
  lastName: string;

  @Column({ field: 'email', type: DataType.STRING })
  email: string;

  @Column({ field: 'gender', type: DataType.STRING })
  gender: string;

  @Column({ field: 'ip_address', type: DataType.STRING })
  ipAddress: string;

  @Column({ field: 'days', type: DataType.INTEGER })
  days: number;

  @CreatedAt
  @Default(new Date())
  @Column({ field: 'created_at' })
  createdAt: Date;

  //---- association ----//

  @HasMany(() => Meeting)
  meetings: Meeting[];
}
