import { Module } from '@nestjs/common';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ColaboradorModule } from './modules/colaborador/colaborador.module';

@Module({
  imports: [ClienteModule, ColaboradorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
