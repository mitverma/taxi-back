import mongoose, { HydratedDocument } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { FUELTYPE } from '../constants/fuel-type';

export type CarsDocument = HydratedDocument<Cars>;

export class OwnershipDetail {
  @Prop({
    required: true,
  })
  ownerName: string;

  @Prop({
    required: true,
    type: Date,
  })
  registrationDate: Date;

  @Prop({
    required: true,
  })
  registreredRTO: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;
}

export class VehicleDetails {
  @Prop({
    default: null,
  })
  makerModel: string;

  @Prop({
    default: null,
  })
  vehicleClass: string;

  @Prop({
    required: true,
    type: FUELTYPE,
  })
  fuelType: FUELTYPE;

  @Prop({
    default: null,
  })
  fuelNorms: string;

  @Prop({
    required: true,
  })
  engineNo: string;

  @Prop({
    required: true,
  })
  chassisNo: string;
}

@Schema({
  timestamps: true,
})
export class Cars {
  @Prop({
    auto: true,
    type: mongoose.Schema.Types.ObjectId,
  })
  id: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
  })
  registrationNo: string;

  @Prop({
    required: true,
  })
  ownershipDetails: OwnershipDetail;

  @Prop({
    required: true,
  })
  vehicleDetails: VehicleDetails;

  @Prop({
    default: null,
  })
  icon: string;

  @Prop({
    default: true,
  })
  isActive: boolean;
}

export const CarsSchema = SchemaFactory.createForClass(Cars);

CarsSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  getters: true,
  transform(doc, obj) {
    delete obj._id;
    delete obj.id;
  },
});
CarsSchema.set('toObject', { virtuals: false });
