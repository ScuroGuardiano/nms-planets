import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { CreateGalaxyRegionDto, UpdateGalaxyRegionDto } from '../dtos/region';
import { RegionService } from '../services/region.service';

@UseGuards(JwtAuthGuard)
@Controller('nms/regions')
export class RegionController {
  constructor(private regionService: RegionService) {}

  @Get('/')
  async list() {
    const entities = await this.regionService.list();
    return entities;
  }

  @Get("/:id")
  async getById(@Param("id") id: number) {
    const entity = await this.regionService.getById(id);
    return entity;
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreateGalaxyRegionDto) {
    const entity = await this.regionService.add(createDto);
    return entity;
  }

  @Put('/:id')
  async update(@Param("id") id: number, @Body() updateDto: UpdateGalaxyRegionDto) {
    const entity = await this.regionService.update(id, updateDto);
    return entity;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: number) {
    await this.regionService.delete(id);
  }
}
