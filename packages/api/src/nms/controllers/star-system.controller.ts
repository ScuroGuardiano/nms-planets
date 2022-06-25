import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { CreateStarSystemDto, UpdateStarSystemDto } from '../dtos/star-system';
import { StarSystemService } from '../services/star-system.service';
import { BaseCrudController } from './base-crud-controller';

@UseGuards(JwtAuthGuard)
@Controller('star-system')
export class StarSystemController extends BaseCrudController<CreateStarSystemDto, UpdateStarSystemDto, StarSystemService> {
  constructor(starSystemService: StarSystemService) {
    super(starSystemService);
  }
}
