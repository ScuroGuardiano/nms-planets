import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGalaxyRegionDto, UpdateGalaxyRegionDto } from '../dtos/region';
import GalaxyRegion from '../models/region';
import BaseCrudService from './base-crud-service';

@Injectable()
export class RegionService extends BaseCrudService<GalaxyRegion, CreateGalaxyRegionDto, UpdateGalaxyRegionDto> {
  constructor(
    @InjectRepository(GalaxyRegion)
    regionRepository: Repository<GalaxyRegion>
  ) {
    super(regionRepository, GalaxyRegion);
  }
}
