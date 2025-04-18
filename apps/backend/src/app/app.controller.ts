import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {properties} from '@real-estate-platform/api'
import { Pagination, RealEstatePropertyFilter,Sorting } from '@real-estate-platform/common';
import {CommonTypes} from '@real-estate-platform/common'

@Controller()
export class AppController {
  get appService(): AppService {
    return this._appService;
  }
  constructor(private readonly _appService: AppService) {}

  @Get()
  getData() {
    return this._appService.getData();
  }
  @Get('properties')
  listProperties(filter?: RealEstatePropertyFilter, paging?: Pagination, sorting?: CommonTypes.Sorting ) {
    console.log('Here we go for properties');
    return this._appService.getProperties(filter);
  }
  // Use Property class as the type for the propertyDto
  @Post('properties')
  createProperty(@Body() propertyDto: properties) {
    console.log('Creating property:', propertyDto);
    return this._appService.createProperty(propertyDto);
  }




}
