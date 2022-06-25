import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { CreateGalaxyRegionDto, UpdateGalaxyRegionDto } from '../dtos/region';
import { RegionService } from '../services/region.service';
import { BaseCrudController } from './base-crud-controller';

@UseGuards(JwtAuthGuard)
@Controller('region')
export class RegionController extends BaseCrudController<CreateGalaxyRegionDto, UpdateGalaxyRegionDto, RegionService> {
  constructor(regionService: RegionService) {
    super(regionService);
  }
}
