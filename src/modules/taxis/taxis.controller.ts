import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxisService } from './taxis.service';
import { CreateTaxiDto } from './dto/create-taxi.dto';
import { UpdateTaxiDto } from './dto/update-taxi.dto';

@Controller('taxis')
export class TaxisController {
  constructor(private readonly taxisService: TaxisService) {}

  @Post()
  create(@Body() createTaxiDto: CreateTaxiDto) {
    return this.taxisService.create(createTaxiDto);
  }

  @Get()
  findAll() {
    return this.taxisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxiDto: UpdateTaxiDto) {
    return this.taxisService.update(+id, updateTaxiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxisService.remove(+id);
  }
}
