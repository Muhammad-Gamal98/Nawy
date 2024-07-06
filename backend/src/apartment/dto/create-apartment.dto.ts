import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateApartmentDto {
  @IsString()
  @MaxLength(100)
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(3)
  @MaxLength(1000)
  description: string;

  @IsNumber()
  price: number;
}
