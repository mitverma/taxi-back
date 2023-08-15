import { Injectable } from '@nestjs/common';
import { CreateTripRouteDto } from './dto/create-trip-route.dto';
import { UpdateTripRouteDto } from './dto/update-trip-route.dto';

@Injectable()
export class TripRoutesService {
  create(createTripRouteDto: CreateTripRouteDto) {
    return 'This action adds a new tripRoute';
  }

  findAll() {
    return `This action returns all tripRoutes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripRoute`;
  }

  update(id: number, updateTripRouteDto: UpdateTripRouteDto) {
    return `This action updates a #${id} tripRoute`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripRoute`;
  }
}
