import { Response } from 'express';
import {
  SEND_ERROR,
  SEND_OK,
} from 'src/shared/exception-handlers/controller-exception-handler';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

import { AdminsService } from './admins.service';
import { _DATA } from './data';
import { CreateAdminDto, UpdateAdminDto } from './dto/admin-crud.dto';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post("create")
  async create(@Body() createAdminDto: CreateAdminDto, @Res() res: Response) {
    try {
      const data = await this.adminsService.create(createAdminDto);
      SEND_OK({ message: _DATA.CREATED_SUCCESSFULLY, data }, res).send();
    } catch (error) {
      console.log(error, 'error create')
      SEND_ERROR(error, res).send();
    }
  }

  @Get()
  async findAll() {
    return await this.adminsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(+id);
  }

}
