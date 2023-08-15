import { Injectable } from '@nestjs/common';
import { CreateTaxiDto } from './dto/create-taxi.dto';
import { UpdateTaxiDto } from './dto/update-taxi.dto';

@Injectable()
export class TaxisService {
  create(createTaxiDto: CreateTaxiDto) {
    return 'This action adds a new taxi';
  }

  findAll() {
    return `This action returns all taxis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxi`;
  }

  update(id: number, updateTaxiDto: UpdateTaxiDto) {
    return `This action updates a #${id} taxi`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxi`;
  }
}
