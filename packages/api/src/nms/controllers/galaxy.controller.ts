import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { CreateGalaxyDto, UpdateGalaxyDto } from '../dtos/galaxy';
import { GalaxyService } from '../services/galaxy.service';

@UseGuards(JwtAuthGuard)
@Controller('galaxy')
export class GalaxyController {
  constructor(private galaxyService: GalaxyService) {}

  @Get('/')
  async list() {
    const entities = await this.galaxyService.list();
    return entities;
  }

  @Get("/:id")
  async getById(@Param("id") id: number) {
    const entity = await this.galaxyService.getById(id);
    return entity;
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreateGalaxyDto) {
    const entity = await this.galaxyService.add(createDto);
    return entity;
  }

  @Put('/:id')
  async update(@Param() id: number, @Body() updateDto: UpdateGalaxyDto) {
    const entity = await this.galaxyService.update(id, updateDto);
    return entity;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param() id: number) {
    await this.galaxyService.delete(id);
  }
}
