import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Planet from "./planet";

@Entity()
export default class Resource {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  symbol: string;

  @Column({ nullable: true })
  group?: string;

  @Column({ nullable: true })
  rarity?: string;

  @Column({ nullable: true, type: "decimal" })
  baseValue?: number;

  @ManyToMany(() => Planet)
  planets: Planet[];

}
