import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { SEND_ERROR, SEND_OK } from 'src/shared/exception-handlers/controller-exception-handler';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }


  // cars to be added
  @Post('addCar')
  async addCarDetail(@Body() carAddDto: any, @Res() res: any){
    console.log(carAddDto, 'car add dto');
    try {
      let data = await this.carsService.addCarInfo(carAddDto);
      SEND_OK({message: 'Data send successfully', data}, res ).send()
    } catch (error) {
      SEND_ERROR(error, res).send()
    }
  }
}
