import mongoose, { HydratedDocument } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarTypesDocument = HydratedDocument<CarTypes>;

@Schema({
  timestamps: true,
})
export class CarTypes {
  @Prop({
    auto: true,
    type: mongoose.Schema.Types.ObjectId,
  })
  id: string;

  @Prop({
    required: true,
  })
  carType: string;
  
  @Prop({
    required: true,
    unique: true,
  })
  carName: string;

  @Prop({
    default: true,
  })
  isActive: boolean;

  @Prop({
    default: true,
  })
  carNumber: string;
}

export const CarTypesSchema = SchemaFactory.createForClass(CarTypes);

CarTypesSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  getters: true,
  transform(doc, obj) {
    delete obj._id;
    delete obj.id;
  },
});
CarTypesSchema.set('toObject', { virtuals: false });
