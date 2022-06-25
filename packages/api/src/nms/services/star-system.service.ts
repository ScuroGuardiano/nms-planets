import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStarSystemDto, UpdateStarSystemDto } from '../dtos/star-system';
import StarSystem from '../models/star-system';
import BaseCrudService from './base-crud-service';

@Injectable()
export class StarSystemService extends BaseCrudService<StarSystem, CreateStarSystemDto, UpdateStarSystemDto> {
  constructor(
    @InjectRepository(StarSystem)
    starSystemRepository: Repository<StarSystem>
  ) {
    super(starSystemRepository, StarSystem);
  }
}
