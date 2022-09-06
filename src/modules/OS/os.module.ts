import { Module } from '@nestjs/common';
import { OsController } from './os.controller';
import { OsService } from './os.service';
import { PrismaService } from '../../db/PrismaService';

@Module({
  imports: [],
  controllers: [OsController],
  providers: [OsService, PrismaService],
})
export class OsModule {}
