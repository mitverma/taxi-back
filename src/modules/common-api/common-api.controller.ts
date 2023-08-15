import { Body, Controller, Post } from '@nestjs/common';
import { Delete, Get, Req, Res } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { logger } from 'config/logger-config';
import { Request, Response } from 'express';
import { SEND_ERROR, SEND_OK } from 'src/shared/exception-handlers/controller-exception-handler';
import { _DATA } from '../admins/data';
import { CommonApiService } from './common-api.service';
import { cityDto } from './dto/location-search.dto';

@Controller('common-api')
export class CommonApiController {
    constructor(private commonApiService: CommonApiService){

    }
    @Post('location')
    async getViewLocation(@Req() req: Request, @Res() response: Response){
        try {
            let locationName = req.body.name;
            let locationResponse: any = await this.commonApiService.getLocation(locationName);
            console.log(locationResponse, 'bro locaiton response', response);
            locationResponse.subscribe((data: any) => {
                console.log(data, 'data');
                if(data){
                    response.status(200).json({data, statusCode : 200}).send();
                    // SEND_OK({message: '', data}, response).send();
                }
            })
        }catch(error) {
            console.log(error, 'error aaya');
            SEND_ERROR(error, response).send();
        }
        
    }

    @Post('addCity')
    async create(@Body() reqData: any, @Res() res: Response){
        console.log(reqData, 'city Dto');
        try {
            const data = await this.commonApiService.create(reqData);
            console.log(data, 'data after api call and save');
            SEND_OK({ message: _DATA.CREATED_SUCCESSFULLY, data }, res).send();
          } catch (error) {
            console.log(error, 'error create')
            SEND_ERROR(error, res).send();  
        }
    }

    @Post('removeCity')
        async delete(@Body() req: any, @Res() res: Response) {
            try {
                const data = await this.commonApiService.remove(req);
                SEND_OK({message: 'Data Deleted Successfully', data}, res).send();
            } catch (error) {
                SEND_ERROR(error, res).send();
            }
        }

    @Get('allCity')
    async getCity(){
        return await this.commonApiService.findAll();
    }

    @Post('addCityList')
    async addCityList(@Body() req: any, @Res() res: Response) {
        try {
            const data = await this.commonApiService.addCityList(req);
            SEND_OK({message: 'Data Updated Successfully', data}, res).send();
        }catch (error) {
            SEND_ERROR(error, res).send()
        }
    }
}
