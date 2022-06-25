import { IsArray, IsInt, IsOptional, IsString } from "class-validator";

export class CreatePlanetDto {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  galaxyId?: number;

  @IsInt()
  @IsOptional()
  regionId?: number;

  @IsInt()
  @IsOptional()
  systemId?: number;

  @IsString()
  @IsOptional()
  terrain?: string;

  @IsString()
  @IsOptional()
  biome?: string;

  @IsString()
  @IsOptional()
  weather?: string;

  // TODO: zrobić tu jakąś walidację czy poprawne czy cuś
  /**
   * Must be array of resource ids.
   */
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  resources?: [];

  @IsString()
  @IsOptional()
  sentitels?: string;

  @IsString()
  @IsOptional()
  flora?: string;

  @IsString()
  @IsOptional()
  fauna?: string;

  @IsString()
  @IsOptional()
  claimedBy?: string;

  @IsString()
  @IsOptional()
  discoveredBy?: string;
}

export class UpdatePlanetDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @IsOptional()
  galaxyId?: number;

  @IsInt()
  @IsOptional()
  regionId?: number;

  @IsInt()
  @IsOptional()
  systemId?: number;

  @IsString()
  @IsOptional()
  terrain?: string;

  @IsString()
  @IsOptional()
  biome?: string;

  @IsString()
  @IsOptional()
  weather?: string;

  // TODO: zrobić tu jakąś walidację czy poprawne czy cuś
  /**
   * Must be array of resource ids.
   */
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  resources?: [];

  @IsString()
  @IsOptional()
  sentitels?: string;

  @IsString()
  @IsOptional()
  flora?: string;

  @IsString()
  @IsOptional()
  fauna?: string;

  @IsString()
  @IsOptional()
  claimedBy?: string;

  @IsString()
  @IsOptional()
  discoveredBy?: string;
}
