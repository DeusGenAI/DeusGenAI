import { IsNumber, IsNotEmpty } from 'class-validator';

export class DetailDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
