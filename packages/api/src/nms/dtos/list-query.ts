import { IsInt, IsOptional, Min } from "class-validator";

export class ListQueryDto {
  @IsInt()
  @Min(0)
  @IsOptional()
  offset?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  limit?: number;
}
