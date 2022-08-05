import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { GymUser } from '@domain/gym/entities/gym-user.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  nickname!: string;

  @Column({ nullable: true })
  avatarImage!: string | null;

  @Column()
  phoneNumber!: string;

  @OneToMany(() => GymUser, ({ user }) => user)
  gyms!: GymUser[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
