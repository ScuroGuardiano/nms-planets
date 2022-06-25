import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Galaxy from './models/galaxy.entity';
import Planet from './models/planet.entity';
import GalaxyRegion from './models/region.entity';
import Resource from './models/resource.entity';
import StarSystem from './models/star-system.entity';
import { ResourceService } from './services/resource.service';
import { RegionService } from './services/region.service';
import { GalaxyService } from './services/galaxy.service';
import { StarSystemService } from './services/star-system.service';
import { PlanetService } from './services/planet.service';
import { ResourceController } from './controllers/resource.controller';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { RegionController } from './controllers/region.controller';
import { GalaxyController } from './controllers/galaxy.controller';
import { StarSystemController } from './controllers/star-system.controller';
import { PlanetController } from './controllers/planet.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Galaxy,
      GalaxyRegion,
      StarSystem,
      Planet,
      Resource
    ]),
    AuthenticationModule
  ],
  providers: [ResourceService, RegionService, GalaxyService, StarSystemService, PlanetService],
  controllers: [ResourceController, RegionController, GalaxyController, StarSystemController, PlanetController]
})
export class NmsModule {}
