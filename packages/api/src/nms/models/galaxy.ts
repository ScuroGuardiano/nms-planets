import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import GalaxyRegion from "./region";
import StarSystem from "./star-system";

@Entity()
export default class Galaxy {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
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
