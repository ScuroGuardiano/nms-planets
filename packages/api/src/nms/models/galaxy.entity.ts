import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import GalaxyRegion from "./region.entity";
import StarSystem from "./star-system.entity";

@Entity()
export default class Galaxy {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  order: number;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  color?: string;
  
  @OneToMany(() => GalaxyRegion, region => region.galaxy)
  regions: GalaxyRegion[];
  
  @OneToMany(() => StarSystem, system => system.galaxy)
  systems: StarSystem[]
}
