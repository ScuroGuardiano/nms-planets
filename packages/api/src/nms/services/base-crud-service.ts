import { NotFoundException } from "@nestjs/common";
import { FindOptionsOrder, FindOptionsWhere, Repository } from "typeorm";

export default class BaseCrudService<Model extends { id: any }, CreateDto, UpdateDto> {
  constructor(
    protected repository: Repository<Model>,
    protected Model: new () => Model
  ) {}

  public async add(createDto: CreateDto): Promise<Model> {
    let entity = new this.Model();
    entity = { ...entity, ...createDto };
    entity = await this.repository.save(entity);
    return entity;
  }

  public async update(id: Model["id"], updateDto: UpdateDto) {
    let entity = await this.repository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    entity = { ...entity, ...updateDto };
    entity = await this.repository.save(entity);
    return entity;
  }

  public async delete(id: Model["id"]) {
    await this.repository.delete({ id });
  }

  public async getById(id: Model["id"]) {
    const entity = await this.repository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }

  public async findOne(where: FindOptionsWhere<Model>, order: FindOptionsOrder<Model> = {}) {
    const entity = await this.repository.findOne({ where, order });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }

  public async find(where: FindOptionsWhere<Model>, limit = 20, offset = 0, order: FindOptionsOrder<Model> = {}) {
    return await this.repository.find({ 
      where,
      take: limit,
      skip: offset,
      order
    });
  }

  public async list(limit = 20, offset = 0, order: FindOptionsOrder<Model> = {}) {
    return await this.repository.find({
      take: limit,
      skip: offset,
      order
    });
  }
}
