import { Injectable } from '@nestjs/common';
import { properties, PrismaService } from '@real-estate-platform/api';
import { RealEstatePropertyFilter } from '@real-estate-platform/common';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {

  }
  getData(): { message: string } {
    return {message : 'Hello World!'}
  }
  getProperties (filter:RealEstatePropertyFilter) : Promise<properties[]> {
    console.log('get properties');
    const query  = {}
    return this.prisma.properties.findMany(query);
  }

  createProperty(property: properties): any {
    console.log('creat properties');
    return this.prisma.properties.create({ data: property });
  }
}
