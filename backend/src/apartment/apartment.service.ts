import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApartmentRepository } from './apartment.repository';

@Injectable()
export class ApartmentService {
  constructor(private readonly apartmentRepository: ApartmentRepository) {}
  create(createApartmentDto: CreateApartmentDto) {
    return this.apartmentRepository.create(createApartmentDto);
  }

  findAll() {
    return this.apartmentRepository.findAll();
  }

  findOne(id: string) {
    return this.apartmentRepository.findOne(id);
  }

  // update(id: number, updateApartmentDto: UpdateApartmentDto) {
  //   return `This action updates a #${id} apartment`;
  // }

  remove(id: string) {
    return this.apartmentRepository.remove(id);
  }
}
