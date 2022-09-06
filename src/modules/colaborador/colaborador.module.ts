import { Module } from '@nestjs/common';
import { ColaboradorController } from './colaborador.controller';
import { ColaboradorService } from './colaborador.service';
import { PrismaService } from '../../db/PrismaService';

@Module({
  imports: [],
  controllers: [ColaboradorController],
  providers: [ColaboradorService, PrismaService],
})
export class ColaboradorModule {}
