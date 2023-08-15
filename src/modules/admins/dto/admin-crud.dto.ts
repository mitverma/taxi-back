import {
  IsAlphanumeric,
  IsEmail,
  IsMongoId,
  IsString,
  IsStrongPassword,
  Length,
  MinLength,
} from 'class-validator';
import { ValidationMessage } from 'src/shared/static-data/client-message';

import { AdminDTO } from './admin.dto';

type CreateAdmin = Omit<
  AdminDTO,
  'id' | 'isActive' | 'roles' | 'createdAt' | 'updatedAt'
>;

type UpdateAdmin = Omit<
  AdminDTO,
  'isActive' | 'password' | 'createdAt' | 'updatedAt'
>;
export class CreateAdminDto implements CreateAdmin {
  @IsString()
  @MinLength(3, { message: ValidationMessage.MINIMUM_CHARS })
  firstName: string;

  @IsString()
  @MinLength(3, { message: ValidationMessage.MINIMUM_CHARS })
  lastName: string;

  @IsEmail({}, { message: ValidationMessage.INVALID_EMAIL_ID })
  email: string;

  @IsAlphanumeric()
  @Length(10, 10, { message: ValidationMessage.INVALID_CONTACT_NUMBER })
  contactNo: string;

  @IsStrongPassword({}, { message: ValidationMessage.STRONG_PASSWORD })
  password: string;
}

export class UpdateAdminDto implements UpdateAdmin {
  @IsMongoId()
  id: string;

  @IsString()
  @MinLength(3, { message: ValidationMessage.MINIMUM_CHARS })
  firstName: string;

  @IsString()
  @MinLength(3, { message: ValidationMessage.MINIMUM_CHARS })
  lastName: string;

  @IsEmail({}, { message: ValidationMessage.INVALID_EMAIL_ID })
  email: string;

  @IsAlphanumeric()
  @IsAlphanumeric()
  @Length(10, 10, { message: ValidationMessage.INVALID_CONTACT_NUMBER })
  contactNo: string;
}
