import { Injectable } from '@nestjs/common';
import {agents, properties, prisma, PrismaPromise} from "../../../../libs/nx-prisma-db-lib/libs/db/src/client";

@Injectable()
export class AppService {
  getData(): { message: string } {
    return {message : 'Hello World!'}
  }
  getProperties () : PrismaPromise<properties[]> {
    return prisma.properties.findMany();
  }
}
