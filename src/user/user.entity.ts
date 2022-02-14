import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  product_name: string;

  @Column()
  product_quantity: number;

  @Column()
  product_value: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  pushitem: string;
}
