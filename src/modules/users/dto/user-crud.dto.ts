import { IsAlphanumeric, IsEmail, IsMongoId, IsString, IsStrongPassword, Length, MinLength } from 'class-validator';
  import { ValidationMessage } from 'src/shared/static-data/client-message';
  
  import { CreateUserDto } from './create-user.dto';
  
  type CreateUser = Omit<
    CreateUserDto,
    'id' | 'isActive' | 'roles' | 'createdAt' | 'updatedAt'
  >;
  
  type UpdateUser = Omit<
    CreateUserDto,
    'isActive' | 'password' | 'createdAt' | 'updatedAt'
  >;
  export class CreateUserDTO implements CreateUser {
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
  
  export class UpdateUserDto implements UpdateUser {
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
  