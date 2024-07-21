

import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import {  Document } from 'mongoose';

@Schema()
export class Cliente extends Document {

    @Prop({
        unique: true,
        index: true,
    })
    nombre: string;

    @Prop({
        index: true
    })
    email1:  string;

    @Prop({
        index: true
    })
    email2: string;

    @Prop({
        index: true
    })
    email3:string ;

    @Prop({
        index:true
    })
    email4:string;


    



}

export const ClienteSchema = SchemaFactory.createForClass( Cliente );



