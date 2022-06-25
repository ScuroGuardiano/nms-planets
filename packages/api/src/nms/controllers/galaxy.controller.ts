import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { CreateGalaxyDto, UpdateGalaxyDto } from '../dtos/galaxy';
import { GalaxyService } from '../services/galaxy.service';
import { BaseCrudController } from './base-crud-controller';

@UseGuards(JwtAuthGuard)
@Controller('galaxy')
export class GalaxyController extends BaseCrudController<CreateGalaxyDto, UpdateGalaxyDto, GalaxyService> {
  constructor(galaxyService: GalaxyService) {
    super(galaxyService);
  }
}
