import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";





@Schema()
export class Numero extends Document{

    @Prop({
        index: true
    })
    numero: number;
}
export const NumeroSchema = SchemaFactory.createForClass( Numero );