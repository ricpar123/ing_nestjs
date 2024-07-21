
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Informe extends Document{
   
    @Prop({
        index: true
    })
    numero: number;
    
    @Prop({
        
        index: true,
    })
    cliente: string;

    @Prop({
        index: true
    })
    tecnico: string;

    @Prop({
        index: true
    })
    equipo: string;

    @Prop({
        index: true
    })
    marca: string;

    @Prop({
        index: true
    })
    modelo: string;

    @Prop({
        index: true
    })
    serie: string;

    @Prop({
        index: true
    })
    motivo: string;

    @Prop({
        index: true
    })
    tipoServicio: string;

    @Prop({
        index: true
    })
    presupuesto: string;

    @Prop({
        index: true
    })
    fecha: string;

    @Prop({
        index: true
    })
    diasT: string;

    @Prop({
        index: true
    })
    hInicio: string;

    @Prop({
        index: true
    })
    hFin: string;

    @Prop({
        index: true
    })
    local: string;

    @Prop({
        index: true
    })
    servicio: string;

    @Prop({
        index: true
    })
    obs: string;

    @Prop({
        index: true
    })
    recibido: string;

    @Prop({
        index: true
    })
    firmaC: string;

    @Prop({
        index: true
    })
    firmaT: string;

}

export const InformeSchema = SchemaFactory.createForClass( Informe );
