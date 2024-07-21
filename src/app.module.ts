import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { InformesModule } from './informes/informes.module';
import { ClientesModule } from './clientes/clientes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NumeroModule } from './numero/numero.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB),
    
    UsuariosModule, InformesModule, ClientesModule, NumeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
