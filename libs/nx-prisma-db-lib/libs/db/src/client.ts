import { PrismaClient } from './generated/client';

export const prisma = new PrismaClient();
export * from './generated/client';
