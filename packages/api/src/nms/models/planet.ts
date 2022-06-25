import { Column, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Galaxy from "./galaxy";
import GalaxyRegion from "./region";
import Resource from "./resource";
import StarSystem from "./star-system";

export default class Planet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Galaxy)
  @JoinColumn()
  galaxy?: Galaxy;

  @Column({ nullable: true })
  galaxyId: number;

  @ManyToOne(() => GalaxyRegion)
  @JoinColumn()
  region?: GalaxyRegion;

  @Column({ nullable: true })
  regionId: number;

  @ManyToOne(() => StarSystem, system => system.planets)
  @JoinColumn()
  system?: StarSystem;

  @Column({ nullable: true })
  systemId?: number;

  @Column({ nullable: true })
  terrain?: string;

  @Column({ nullable: true })
  biome?: string;

  @Column({ nullable: true })
  weather?: string;

  @ManyToMany(() => Resource)
  @JoinColumn()
  resources: Resource[];

  @Column({ nullable: true })
  sentitels?: string;

  @Column({ nullable: true })
  flora?: string;

  @Column({ nullable: true })
  fauna?: string;

  @Column({ nullable: true })
  claimedBy: string;

  @Column({ nullable: true })
  discoveredBy: string;
}
