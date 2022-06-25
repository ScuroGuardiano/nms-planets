import { IsDecimal, IsOptional, IsString } from "class-validator";

export class CreateResourceDto {
  @IsString()
  name: string;

  @IsString()
  symbol: string;

  @IsString()
  @IsOptional()
  group?: string;

  @IsString()
  @IsOptional()
  rarity?: string;

  @IsDecimal()
  @IsOptional()
  baseValue?: number;
}

export class UpdateResourceDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  symbol?: string;

  @IsString()
  @IsOptional()
  group?: string;

  @IsString()
  @IsOptional()
  rarity?: string;

  @IsDecimal()
  @IsOptional()
  baseValue?: number;
}
