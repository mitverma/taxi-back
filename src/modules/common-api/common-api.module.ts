import { HttpModule } from '@nestjs/axios/dist';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonApiController } from './common-api.controller';
import { CommonApiService } from './common-api.service';
import { city, citySchema } from './schemas/common-api-schemas';

let featureList = [{
  name: city.name,
  schema: citySchema
}]

@Module({
  imports: [MongooseModule.forFeature(featureList), HttpModule],
  controllers: [CommonApiController],
  providers: [CommonApiService],
  exports: [MongooseModule.forFeature(featureList)]
})
export class CommonApiModule {}
