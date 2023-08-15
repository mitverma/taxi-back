import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosResponse } from 'axios';
import * as https from 'https'
import { Model } from 'mongoose';
import { catchError, map, Observable } from 'rxjs';
import { SVException, SException } from 'src/shared/exception-handlers/service-exception';
import { _DATA } from '../admins/data';
import { cityDto } from './dto/location-search.dto';
import { city, cityDocument } from './schemas/common-api-schemas';

@Injectable()
export class CommonApiService {
    constructor(@InjectModel(city.name) private commonApi: Model<cityDocument>, private http: HttpService){
        console.log('common api controller');
    }

    async create(city: cityDto){
        try {
            let {value} = city;
            if(await this.findExisting({value})){
                throw new SVException(_DATA.DATA_EXISTS);
            }
            let cityCreation = await this.commonApi.create(city);
            return cityCreation;
        } catch (error) {
            throw new SException(error);
        }
    }

    
    remove(city: cityDto){
        try {
            let cityRemoved =  this.commonApi.deleteOne(city);
            return cityRemoved;

        } catch (error) {
            throw new SException(error);
        }
    }

    async findAll(){
        try {
            let allList = this.commonApi.find();
            return allList;
        }catch (error) {
            throw new SException(error);
        }
    }

    async addCityList(list: Array<any>){
        try {
            let cityAdded = this.commonApi.insertMany(list)
        }catch (error) {
            throw new SException(error);
        }
    }

    async getLocation(location) {
        console.log(`https://geocode.maps.co/search?q='`,location);
        return this.http.get('https://geocode.maps.co/search?q='+location, {
            httpsAgent: new https.Agent({  
                rejectUnauthorized: false
              })
        }).pipe(map((response: AxiosResponse) => {
            console.log(response.data.length, 'length')
            return response;
        }), catchError((err)=> {
            console.log(err, 'error on location api calling');
            return err;
        })
        )
    }


    async findExisting({ value }: Partial<cityDto>) {
        const city = await this.commonApi.findOne().or([{ value }]);
        return city;
      }
}
