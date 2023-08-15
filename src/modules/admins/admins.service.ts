import { Model } from 'mongoose';
import {
  SException,
  SVException,
} from 'src/shared/exception-handlers/service-exception';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { _DATA } from './data';
import { CreateAdminDto, UpdateAdminDto } from './dto/admin-crud.dto';
import { Admins, AdminsDocument } from './schemas/admins.schema';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admins.name) private adminModel: Model<AdminsDocument>,
  ) {}
  async create(newAdminData: CreateAdminDto) {
    console.log(this.adminModel, 'admin model');
    const { email, contactNo } = newAdminData;
    try {
      if (await this.findExisting({ email, contactNo })) {
        throw new SVException(_DATA.DATA_EXISTS);
      }
      const newAdmin = await this.adminModel.create(newAdminData);
      return newAdmin;
    } catch (error) {
      throw new SException(error);
    }
  }

  async findAll() {
    return await this.adminModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }

  async findExisting({ email, contactNo }: Partial<CreateAdminDto>) {
    const admin = await this.adminModel
      .findOne()
      .or([{ email }, { contactNo }]);
    return admin;
  }
}
