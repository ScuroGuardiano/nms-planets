import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Galaxy from "./galaxy";
import Planet from "./planet";
import GalaxyRegion from "./region";

@Entity()
export default class StarSystem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Galaxy, galaxy => galaxy.systems)
  @JoinColumn()
  galaxy?: Galaxy;

  @Column({ nullable: true })
  galaxyId?: number;

  @ManyToOne(() => GalaxyRegion, region => region.systems)
  @JoinColumn()
  region?: GalaxyRegion;

  @Column({ nullable: true })
  regionId: number;

  @OneToMany(() => Planet, planet => planet.system)
  planets: Planet[];

  @Column({ nullable: true })
  spectralClass?: string;

  @Column({ nullable: true })
  distanceToCentre?: number;

  @Column({ nullable: true })
  galacticCoords?: string;

  @Column({ nullable: true })
  systemId?: number;

  @Column({ nullable: true })
  waterworld?: boolean;

  @Column({ nullable: true })
  fraction?: string;

  @Column({ nullable: true })
  economy?: string;

  @Column({ nullable: true, type: "decimal" })
  esell?: number;

  @Column({ nullable: true, type: "decimal" })
  ebuy?: number;

  @Column({ nullable: true })
  wealth?: string;

  @Column({ nullable: true })
  claimedBy: string;
}
