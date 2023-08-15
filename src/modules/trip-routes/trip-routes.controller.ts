import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripRoutesService } from './trip-routes.service';
import { CreateTripRouteDto } from './dto/create-trip-route.dto';
import { UpdateTripRouteDto } from './dto/update-trip-route.dto';

@Controller('trip-routes')
export class TripRoutesController {
  constructor(private readonly tripRoutesService: TripRoutesService) {}

  @Post()
  create(@Body() createTripRouteDto: CreateTripRouteDto) {
    return this.tripRoutesService.create(createTripRouteDto);
  }

  @Get()
  findAll() {
    return this.tripRoutesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripRoutesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripRouteDto: UpdateTripRouteDto) {
    return this.tripRoutesService.update(+id, updateTripRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripRoutesService.remove(+id);
  }
}
