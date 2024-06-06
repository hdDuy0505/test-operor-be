import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { User } from '~/users/users.entity';

@Table({
  tableName: 'meetings',
  timestamps: false,
  paranoid: true,
})
export class Meeting extends Model<Meeting> {
  @Column({
    field: 'id',
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({ field: 'user_id', type: DataType.INTEGER })
  userId: number;

  @Column({ field: 'room_id', type: DataType.INTEGER })
  roomId: number;

  @Column({ field: 'start_day', type: DataType.INTEGER })
  startDay: number;

  @Column({ field: 'end_day', type: DataType.INTEGER })
  endDay: number;

  @CreatedAt
  @Default(new Date())
  @Column({ field: 'created_at' })
  createdAt: Date;

  //---- association ----//

  @BelongsTo(() => User)
  user: User;
}
