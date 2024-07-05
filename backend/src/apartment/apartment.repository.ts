import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from './entities/apartment.entity';
import { Repository } from 'typeorm';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentRepository {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}

  create(createApartmentDto: CreateApartmentDto) {
    const createdApartment =
      this.apartmentRepository.create(createApartmentDto);
    return this.apartmentRepository.save(createdApartment);
  }
  findAll() {
    return this.apartmentRepository.find();
  }
  async findOne(id: string) {
    const apartmentFound = await this.apartmentRepository.findOneBy({ id });
    if (!apartmentFound) throw new NotFoundException(`Apartment Not Found`);
    return apartmentFound;
  }
  async remove(id: string) {
    const apartmentFound = await this.findOne(id);
    return this.apartmentRepository.remove(apartmentFound);
  }
}
