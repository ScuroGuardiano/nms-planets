import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Galaxy from './models/galaxy';
import Planet from './models/planet';
import GalaxyRegion from './models/region';
import Resource from './models/resource';
import StarSystem from './models/star-system';
import { ResourceService } from './services/resource.service';
import { RegionService } from './services/region.service';
import { GalaxyService } from './services/galaxy.service';
import { StarSystemService } from './services/star-system.service';
import { PlanetService } from './services/planet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Galaxy,
      GalaxyRegion,
      StarSystem,
      Planet,
      Resource
    ])
  ],
  providers: [ResourceService, RegionService, GalaxyService, StarSystemService, PlanetService]
})
export class NmsModule {}
