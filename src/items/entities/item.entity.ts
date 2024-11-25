import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  amount: number;

  @Column()
  quantity: number;

  @Column({ default: 'PENDING' })
  status: string;

  @Column({ default: 1 })
  owner_id: number;
}
