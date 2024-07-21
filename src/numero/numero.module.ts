import { Module } from '@nestjs/common';
import { NumeroService } from './numero.service';
import { NumeroController } from './numero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Numero, NumeroSchema } from './entities/numero.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Numero.name,
      schema: NumeroSchema
    }])
  ],
    
 
  controllers: [NumeroController],
  providers: [NumeroService],
})
export class NumeroModule {}
