import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { CreatePlanetDto, UpdatePlanetDto } from '../dtos/planet';
import { PlanetService } from '../services/planet.service';

@UseGuards(JwtAuthGuard)
@Controller('planet')
export class PlanetController {
  constructor(private planetService: PlanetService) {}

  @Get('/')
  async list() {
    const entities = await this.planetService.list();
    return entities;
  }

  @Get("/:id")
  async getById(@Param("id") id: number) {
    const entity = await this.planetService.getById(id);
    return entity;
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreatePlanetDto) {
    const entity = await this.planetService.add(createDto);
    return entity;
  }

  @Put('/:id')
  async update(@Param() id: number, @Body() updateDto: UpdatePlanetDto) {
    const entity = await this.planetService.update(id, updateDto);
    return entity;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param() id: number) {
    await this.planetService.delete(id);
  }
}
