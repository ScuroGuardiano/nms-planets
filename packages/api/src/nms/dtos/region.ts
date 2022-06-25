import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateGalaxyRegionDto {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  galaxyId?: number;

  @IsString()
  @IsOptional()
  quadrant?: string;

  @IsString()
  @IsOptional()
  civilizedSpace?: string;
}

export class UpdateGalaxyRegionDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  galaxyId?: number;

  @IsString()
  @IsOptional()
  quadrant?: string;

  @IsString()
  @IsOptional()
  civilizedSpace?: string;
}
