import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { CreateResourceDto, UpdateResourceDto } from '../dtos/resource';
import { ResourceService } from '../services/resource.service';
import { BaseCrudController } from './base-crud-controller';

@UseGuards(JwtAuthGuard)
@Controller('resource')
export class ResourceController extends BaseCrudController<CreateResourceDto, UpdateResourceDto, ResourceService> {
  constructor(resourceService: ResourceService) {
    super(resourceService);
  }
}
