import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import {  Document } from 'mongoose';

@Schema()
export class Usuario extends Document {

    @Prop({
        unique: true,
        index: true,
    })
    userid: string;

    @Prop({
        unique: true,
        index: true,
    })
    clave: string;


    @Prop({
       
        index: true,
    })
    rol: string;



}

export const UsuarioSchema = SchemaFactory.createForClass( Usuario );
