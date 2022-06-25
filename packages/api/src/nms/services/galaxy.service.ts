import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGalaxyDto, UpdateGalaxyDto } from '../dtos/galaxy';
import Galaxy from '../models/galaxy.entity';
import BaseCrudService from './base-crud-service';

@Injectable()
export class GalaxyService extends BaseCrudService<Galaxy, CreateGalaxyDto, UpdateGalaxyDto> {
  constructor(
    @InjectRepository(Galaxy)
    galaxyRepository: Repository<Galaxy>
  ) {
    super(galaxyRepository, Galaxy);
  }
}
