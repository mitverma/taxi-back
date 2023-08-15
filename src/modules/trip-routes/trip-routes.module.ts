import { Module } from '@nestjs/common';
import { TripRoutesService } from './trip-routes.service';
import { TripRoutesController } from './trip-routes.controller';

@Module({
  controllers: [TripRoutesController],
  providers: [TripRoutesService]
})
export class TripRoutesModule {}
