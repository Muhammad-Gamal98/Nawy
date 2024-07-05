import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  price: number;
}
