import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SException, SVException } from 'src/shared/exception-handlers/service-exception';
import { _DATA } from '../admins/data';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarTypes, CarTypesDocument } from './schemas/car-types.schema';

@Injectable()
export class CarsService {

  constructor(@InjectModel(CarTypes.name) private carModel: Model<CarTypesDocument>){

  }
  
  create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  findAll() {
    return `This action returns all cars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }

  async addCarInfo(createCarDto: CreateCarDto){
    try {
        let {carType, carName, carNumber} = createCarDto;
        if(await this.findExisting({carType, carName, carNumber})){
            throw new SVException(_DATA.DATA_EXISTS);
        }
        let carInfo = await this.carModel.create(createCarDto);
        return carInfo;
      } catch (error) {
          throw new SException(error);
      }

  }



  async findExisting({ carType, carName, carNumber }: Partial<CreateCarDto>) {
    const car = await this.carModel.findOne().or([{ carType, carName , carNumber }]);
    return car;
  }
}
