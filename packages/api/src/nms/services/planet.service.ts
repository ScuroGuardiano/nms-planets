import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanetDto, UpdatePlanetDto } from '../dtos/planet';
import Planet from '../models/planet.entity';
import BaseCrudService from './base-crud-service';

@Injectable()
export class PlanetService extends BaseCrudService<Planet, CreatePlanetDto, UpdatePlanetDto> {
  constructor(
    @InjectRepository(Planet)
    planetRepository: Repository<Planet>
  ) {
    super(planetRepository, Planet);
  }
}
