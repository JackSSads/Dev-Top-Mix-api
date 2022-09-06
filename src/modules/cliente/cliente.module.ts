import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { PrismaService } from '../../db/PrismaService';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [ClienteService, PrismaService],
})
export class ClienteModule {}
