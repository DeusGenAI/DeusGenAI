import { IsString, IsNotEmpty } from 'class-validator';

export class PublishDto {
  @IsString()
  @IsNotEmpty()
  threadId: string;
}
