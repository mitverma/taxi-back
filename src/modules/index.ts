import { AdminsModule } from './admins/admins.module';
import { CarsModule } from './cars/cars.module';
import { CommonApiModule } from './common-api/common-api.module';
import { CouponsModule } from './coupons/coupons.module';
import { TaxisModule } from './taxis/taxis.module';
import { TripRoutesModule } from './trip-routes/trip-routes.module';
import { TripsModule } from './trips/trips.module';
import { UsersModule } from './users/users.module';

export const coreModules = [
  AdminsModule,
  TripRoutesModule,
  CarsModule,
  TripsModule,
  TaxisModule,
  CouponsModule,
  UsersModule,
  CommonApiModule
];
