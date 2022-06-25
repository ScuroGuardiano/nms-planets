import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { CreateStarSystemDto, UpdateStarSystemDto } from '../dtos/star-system';
import { StarSystemService } from '../services/star-system.service';

@UseGuards(JwtAuthGuard)
@Controller('star-system')
export class StarSystemController {
  constructor(private starSystemService: StarSystemService) {}

  @Get('/')
  async list() {
    const entities = await this.starSystemService.list();
    return entities;
  }

  @Get("/:id")
  async getById(@Param("id") id: number) {
    const entity = await this.starSystemService.getById(id);
    return entity;
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreateStarSystemDto) {
    const entity = await this.starSystemService.add(createDto);
    return entity;
  }

  @Put('/:id')
  async update(@Param() id: number, @Body() updateDto: UpdateStarSystemDto) {
    const entity = await this.starSystemService.update(id, updateDto);
    return entity;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param() id: number) {
    await this.starSystemService.delete(id);
  }
}
