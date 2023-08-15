import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UsersSchemas } from './schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';

const featureList = [
  {
    name: Users.name,
    schema: UsersSchemas,
  },
];

@Module({
  imports: [MongooseModule.forFeature(featureList)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MongooseModule.forFeature(featureList)],
})
export class UsersModule {}
