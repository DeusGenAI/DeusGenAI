import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class MessageDto {
  @IsString()
  @IsOptional()
  threadId?: string;

  @IsString()
  @IsNotEmpty()
  content: string; 
}
