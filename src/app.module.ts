import { Module } from '@nestjs/common';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ColaboradorModule } from './modules/colaborador/colaborador.module';
import { GestorModule } from './modules/gestor/gestor.module';
import { OsModule } from './modules/OS/os.module';

@Module({
  imports: [
    ClienteModule,
    ColaboradorModule,
    GestorModule,
    OsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
