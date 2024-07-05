import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateApartmentDto {
  @IsString()
  @MaxLength(100)
  @MinLength(3)
  title: string;

  @IsNumber()
  price: number;
}
