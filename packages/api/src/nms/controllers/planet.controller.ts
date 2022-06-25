import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { CreatePlanetDto, UpdatePlanetDto } from '../dtos/planet';
import { PlanetService } from '../services/planet.service';
import { BaseCrudController } from './base-crud-controller';

@UseGuards(JwtAuthGuard)
@Controller('planet')
export class PlanetController extends BaseCrudController<CreatePlanetDto, UpdatePlanetDto, PlanetService> {
  constructor(planetService: PlanetService) {
    super(planetService);
  }
}
