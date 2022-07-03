import { Transform } from "class-transformer";
import { IsInt, IsOptional, Min } from "class-validator";

export class ListQueryDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsInt()
  @Min(0)
  @IsOptional()
  offset?: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsInt()
  @Min(0)
  @IsOptional()
  limit?: number;
}
