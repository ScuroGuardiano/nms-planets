import { IsNumber, IsOptional, IsString } from "class-validator";

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

  @IsNumber()
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

  @IsNumber()
  @IsOptional()
  baseValue?: number;
}
