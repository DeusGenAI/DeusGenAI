import { IsString, IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';

export class ResultDto {
  @IsBoolean()
  @IsNotEmpty()
  success: boolean;

  @IsOptional()
  data?: any;

  @IsString()
  @IsOptional()
  error?: string;
}
