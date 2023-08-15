import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, Users } from './schemas/users.schema';
import { SVException } from 'src/shared/exception-handlers/service-exception';
import { _CONSTANTS } from '../../shared/app-constants/index';

@Injectable()
export class UsersService {
constructor(@InjectModel(Users.name) private userModel: Model<UserDocument>){

  }
  async create(createUserDto: CreateUserDto) {
    console.log(this.userModel, 'user model');
    let {email, contactNo } = createUserDto;
    let user = await this.userModel.findOne().or([{email }, { contactNo }]);
    if(user){
      throw new SVException(_CONSTANTS.DATA.DATA_EXISTS);
    }else {
      let newAdminCreated = await this.userModel.create(createUserDto);
      return newAdminCreated;
    }
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: number) {
    return await this.userModel.findById(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({id: updateUserDto.id}, updateUserDto);
  }

  async remove(id: number) {
    return this.userModel.deleteOne({id: id}); 
  }
}
