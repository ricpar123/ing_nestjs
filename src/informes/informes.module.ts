import { Module } from '@nestjs/common';
import { InformesService } from './informes.service';
import { InformesController } from './InformesController';
import { MongooseModule } from '@nestjs/mongoose';
import { Informe, InformeSchema } from './entities/informe.entity';
import { Numero, NumeroSchema } from 'src/numero/entities/numero.entity';
import { NumeroService } from 'src/numero/numero.service';


@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Informe.name,
      schema: InformeSchema,
    }, 
  {name: Numero.name,
    schema: NumeroSchema
  }]),
  ],

  
  controllers: [InformesController],
  providers: [InformesService, NumeroService],
})

export class InformesModule {}
