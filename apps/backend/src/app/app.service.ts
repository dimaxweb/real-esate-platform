import { Injectable } from '@nestjs/common';
import { properties, PrismaService } from '@real-estate-platform/api';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {

  }
  getData(): { message: string } {
    return {message : 'Hello World!'}
  }
  getProperties () : Promise<properties[]> {
    return this.prisma.properties.findMany();
  }
}
