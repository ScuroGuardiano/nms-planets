import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import BaseCrudService from "../services/base-crud-service";

export class BaseCrudController<
  CreateDto,
  UpdateDto,
  Service extends BaseCrudService<any, CreateDto, UpdateDto>
  > {
  constructor(
    protected service: Service
  ) {}

  @Get('/')
  async list() {
    const entities = await this.service.list();
    return entities;
  }

  @Get("/:id")
  async getById(@Param("id") id: number) {
    const entity = await this.service.getById(id);
    return entity;
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreateDto) {
    const entity = await this.service.add(createDto);
    return entity;
  }

  @Put('/:id')
  async update(@Param() id: number, @Body() updateDto: UpdateDto) {
    const entity = await this.service.update(id, updateDto);
    return entity;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param() id: number) {
    await this.service.delete(id);
  }
}
