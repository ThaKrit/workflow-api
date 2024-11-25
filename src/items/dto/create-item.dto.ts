import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  status: string = 'PENDING';

  @IsNotEmpty()
  @IsNumber()
  ownerId: number = 1;
}
