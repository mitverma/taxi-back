import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { Admins, AdminsSchema } from './schemas/admins.schema';

const featureList = [
  {
    name: Admins.name,
    schema: AdminsSchema,
  },
];

@Module({
  imports: [MongooseModule.forFeature(featureList)],
  controllers: [AdminsController],
  providers: [AdminsService],
  exports: [MongooseModule.forFeature(featureList)],
})
export class AdminsModule {}
