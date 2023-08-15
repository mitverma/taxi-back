import mongoose, { HydratedDocument } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarFeaturesDocument = HydratedDocument<CarFeatures>;

@Schema({
  timestamps: true,
})
export class CarFeatures {
  @Prop({
    auto: true,
    type: mongoose.Schema.Types.ObjectId,
  })
  id: string;

  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    default: true,
  })
  isActive: boolean;

  @Prop({
    default: null,
  })
  icon: string;
}

export const CarFeaturesSchema = SchemaFactory.createForClass(CarFeatures);

CarFeaturesSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  getters: true,
  transform(doc, obj) {
    delete obj._id;
    delete obj.id;
  },
});
CarFeaturesSchema.set('toObject', { virtuals: false });
