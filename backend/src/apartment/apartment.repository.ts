import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from './entities/apartment.entity';
import { Repository } from 'typeorm';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { PaginationParams } from './dto/pagination.dto';
import { IMAGES_URL } from './images/imgesURL';

const imageArray = IMAGES_URL;
let imageIndex = 0;
console.log('🚀 ~ imageIndex:', imageIndex);

@Injectable()
export class ApartmentRepository {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}

  create(createApartmentDto: CreateApartmentDto) {
    const createdApartment = this.apartmentRepository.create({
      ...createApartmentDto,
      image: imageArray[imageIndex % imageArray.length],
    });
    imageIndex++;
    return this.apartmentRepository.save(createdApartment);
  }
  async findAllWithPagination(pagination?: PaginationParams) {
    const skip = ((pagination.page ?? 1) - 1) * (pagination.limit ?? 10);

    const [apartments, totalRows] = await this.apartmentRepository.findAndCount(
      {
        skip,
        take: pagination.limit ?? 10,
      },
    );
    return { apartments, totalRows };
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
  async removeAll() {
    return this.apartmentRepository.delete({});
  }
}
