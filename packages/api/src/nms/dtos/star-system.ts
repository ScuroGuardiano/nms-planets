import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateStarSystemDto {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  galaxyId?: number;

  @IsInt()
  @IsOptional()
  regionId?: number;

  @IsString()
  @IsOptional()
  spectralClass?: string;

  @IsInt()
  @IsOptional()
  distanceToCentre?: number;

  @IsString()
  @IsOptional()
  galacticCoords?: string;

  @IsInt()
  @IsOptional()
  systemId?: number;

  @IsBoolean()
  @IsOptional()
  waterworld?: boolean;

  @IsString()
  @IsOptional()
  fraction?: string;

  @IsString()
  @IsOptional()
  economy?: string;

  @IsNumber()
  @IsOptional()
  esell?: number;

  @IsNumber()
  @IsOptional()
  ebuy?: number;

  @IsString()
  @IsOptional()
  wealth?: string;

  @IsString()
  @IsOptional()
  claimedBy?: string;
}


export class UpdateStarSystemDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  galaxyId?: string;

  @IsString()
  @IsOptional()
  regionId?: string;

  @IsString()
  @IsOptional()
  spectralClass?: string;

  @IsInt()
  @IsOptional()
  distanceToCentre?: number;

  @IsString()
  @IsOptional()
  galacticCoords?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  systemId?: number;

  @IsBoolean()
  @IsOptional()
  waterworld?: boolean;

  @IsString()
  @IsOptional()
  fraction?: string;

  @IsString()
  @IsOptional()
  economy?: string;

  @IsNumber()
  @IsOptional()
  esell?: number;

  @IsNumber()
  @IsOptional()
  ebuy?: number;

  @IsString()
  @IsOptional()
  wealth?: string;

  @IsString()
  @IsOptional()
  claimedBy?: string;
}
