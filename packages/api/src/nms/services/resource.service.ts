import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsOrder, FindOptionsWhere, Repository } from 'typeorm';
import { CreateResourceDto, UpdateResourceDto } from '../dtos/resource';
import Resource from '../models/resource.entity';
import BaseCrudService from './base-crud-service';

@Injectable()
export class ResourceService extends BaseCrudService<Resource, CreateResourceDto, UpdateResourceDto> {
  constructor(
    @InjectRepository(Resource)
    resourceRepository: Repository<Resource>
  ) {
    super(resourceRepository, Resource);
  }

  public async add(createDto: CreateResourceDto): Promise<Resource> {
    const resources = await this.repository.findBy([
      { symbol: createDto.symbol },
      { name: createDto.name }
    ]);
    
    if (resources.length > 0) {
      throw new BadRequestException(`There already exists resource with symbol: '${createDto.symbol}' or name: '${createDto.name}'.`);
    }
    return super.add(createDto);
  }
}
