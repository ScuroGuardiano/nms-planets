import { IsInt, IsOptional, IsString, Min } from "class-validator";

export class CreateGalaxyDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  order: number;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  color?: string;
}

export class UpdateGalaxyDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  order?: number;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  color?: string;
}
