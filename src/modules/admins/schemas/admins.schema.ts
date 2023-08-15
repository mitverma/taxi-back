import mongoose, { HydratedDocument } from 'mongoose';
import { hash } from 'src/shared/utils';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AdminsDocument = HydratedDocument<Admins>;

@Schema({
  timestamps: true,
})
export class Admins {
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

  @Prop({
    default: [],
  })
  roles: Array<string>;
}

export const AdminsSchema = SchemaFactory.createForClass(Admins);

AdminsSchema.virtual('fullName').get(function (this: AdminsDocument) {
  return `${this.firstName} ${this.lastName}`;
});

AdminsSchema.pre('save', function (next) {
  if (this.password === undefined) {
    return next();
  }
  this.password = hash(this.password);
  next();
});

AdminsSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  getters: true,
  transform(doc, obj) {
    delete obj._id;
    delete obj.id;
    delete obj.password;
  },
});
AdminsSchema.set('toObject', { virtuals: false });
