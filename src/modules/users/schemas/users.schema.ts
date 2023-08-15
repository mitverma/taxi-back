import mongoose, { HydratedDocument } from 'mongoose';
import { hash } from 'src/shared/utils';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<Users>;

@Schema({
  timestamps: true,
})
export class Users {
  @Prop({
    auto: true,
    type: mongoose.Schema.Types.ObjectId,
  })
  id: string;

  @Prop({
    required: true,
  })
  firstName: string;

  @Prop({
    default: null,
  })
  lastName: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop({
    default: false,
  })
  isActive: boolean;

  @Prop({
    unique: true,
  })
  contactNo: string;

  @Prop({})
  password: string;
}

export const UsersSchemas = SchemaFactory.createForClass(Users);
