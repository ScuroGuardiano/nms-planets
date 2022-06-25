import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsOrder, FindOptionsWhere, Repository } from 'typeorm';
import { CreateResourceDto, UpdateResourceDto } from '../dtos/resource';
import Resource from '../models/resource';
import BaseCrudService from './base-crud-service';

@Injectable()
export class ResourceService extends BaseCrudService<Resource, CreateResourceDto, UpdateResourceDto> {
  constructor(
    @InjectRepository(Resource)
    resourceRepository: Repository<Resource>
  ) {
    super(resourceRepository, Resource);
  }

  // public async addResource(resourceDto: CreateResourceDto) {
  //   let resource = new Resource();
  //   resource = { ...resource, ...resourceDto };
  //   resource = await this.resourceRepository.save(resource);
  //   return resource;
  // }

  // public async updateResource(id: number, resourceDto: UpdateResourceDto) {
  //   let resource = await this.resourceRepository.findOneBy({ id });
  //   if (!resource) {
  //     throw new NotFoundException();
  //   }
  //   resource = { ...resource, ...resourceDto };
  //   resource = await this.resourceRepository.save(resource);
  //   return resource;
  // }

  // public async deleteResource(id: number) {
  //   await this.resourceRepository.delete(id);
  // }

  // public async getById(id: number) {
  //   const resource = await this.resourceRepository.findOneBy({ id });
  //   if (!resource) {
  //     throw new NotFoundException();
  //   }
  //   return resource;
  // }

  // public async findOne(where: FindOptionsWhere<Resource>, order: FindOptionsOrder<Resource> = {}) {
  //   const resource = await this.resourceRepository.findOne({ where, order });
  //   if (!resource) {
  //     throw new NotFoundException();
  //   }
  //   return resource;
  // }

  // public async find(where: FindOptionsWhere<Resource>, limit = 20, offset = 0, order: FindOptionsOrder<Resource> = {}) {
  //   return await this.resourceRepository.find({ 
  //     where,
  //     take: limit,
  //     skip: offset,
  //     order
  //   });
  // }

  // public async list(limit = 20, offset = 0, order: FindOptionsOrder<Resource> = {}) {
  //   return await this.resourceRepository.find({
  //     take: limit,
  //     skip: offset,
  //     order
  //   });
  // }
}
