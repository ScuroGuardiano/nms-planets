import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { ListQueryDto } from '../dtos/list-query';
import { CreateResourceDto, UpdateResourceDto } from '../dtos/resource';
import { ResourceService } from '../services/resource.service';

@UseGuards(JwtAuthGuard)
@Controller('nms/resources')
export class ResourceController {
  constructor(private resourceService: ResourceService) {}

  @Get('/')
  async list(@Query() query: ListQueryDto) {
    const entities = await this.resourceService.list(query.limit, query.offset);
    return entities;
  }

  @Get("/:id")
  async getById(@Param("id") id: number) {
    const entity = await this.resourceService.getById(id);
    return entity;
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreateResourceDto) {
    const entity = await this.resourceService.add(createDto);
    return entity;
  }

  @Put('/:id')
  async update(@Param("id") id: number, @Body() updateDto: UpdateResourceDto) {
    const entity = await this.resourceService.update(id, updateDto);
    return entity;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: number) {
    await this.resourceService.delete(id);
  }
}
