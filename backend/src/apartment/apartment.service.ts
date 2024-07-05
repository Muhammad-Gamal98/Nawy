import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApartmentRepository } from './apartment.repository';
import { PaginationParams } from './dto/pagination.dto';

@Injectable()
export class ApartmentService {
  constructor(private readonly apartmentRepository: ApartmentRepository) {}
  create(createApartmentDto: CreateApartmentDto) {
    return this.apartmentRepository.create(createApartmentDto);
  }

  async findAll(pagination?: PaginationParams) {
    const { apartments, totalRows } =
      await this.apartmentRepository.findAllWithPagination(pagination);
    return {
      data: apartments,
      totalRows: totalRows,
      returnedRowsCount: apartments.length,
      ...((pagination.page ?? 1) && {
        numOfPages: Math.ceil(totalRows / (pagination.limit ?? 10)),
        pageNumber: pagination.page ?? 1,
      }),
    };
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
