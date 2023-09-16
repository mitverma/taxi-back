import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { CarTypes, CarTypesSchema } from './schemas/car-types.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';

let featureList = [{
  name: CarTypes.name,
  schema: CarTypesSchema
}]

@Module({
  imports: [MongooseModule.forFeature(featureList), HttpModule],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [MongooseModule.forFeature(featureList)]
})
export class CarsModule {}
