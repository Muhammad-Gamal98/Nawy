import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
// import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationParams } from './dto/pagination.dto';

@ApiTags('Apartment')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentService.create(createApartmentDto);
  }

  @Get()
  findAll(@Query() pagination?: PaginationParams) {
    return this.apartmentService.findAll(pagination);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentService.remove(id);
  }
  @Delete()
  removeAll() {
    return this.apartmentService.removeAll();
  }
}
