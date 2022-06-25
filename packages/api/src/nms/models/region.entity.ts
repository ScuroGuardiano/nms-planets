import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Galaxy from "./galaxy.entity";
import StarSystem from "./star-system.entity";

@Entity()
export default class GalaxyRegion {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Galaxy, galaxy => galaxy.regions)
  @JoinColumn()
  galaxy?: Galaxy;

  @Column({ nullable: true })
  galaxyId: number;

  @Column({ nullable: true })
  quadrant?: string;

  @Column({ nullable: true })
  civilizedSpace: string;

  @OneToMany(() => StarSystem, system => system.region)
  systems: StarSystem[];
}
