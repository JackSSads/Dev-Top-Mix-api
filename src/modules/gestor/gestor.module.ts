import { Module } from '@nestjs/common';
import { GestorController } from './gestor.controller';
import { GestorService } from './gestor.service';
import { PrismaService } from '../../db/PrismaService';

@Module({
  imports: [],
  controllers: [GestorController],
  providers: [GestorService, PrismaService],
})
export class GestorModule {}
