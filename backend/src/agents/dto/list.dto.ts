import { IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class ListDto {
  @IsNumber()
  @IsOptional()
  page: number;

  @IsNumber()
  @IsOptional()
  limit: number; 
}
