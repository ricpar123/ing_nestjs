
import { IsNotEmpty, IsOptional, IsString } from "class-validator";



export class CreateClienteDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;  

    @IsOptional()
    @IsString()
    email1?: string;

    @IsOptional()
    @IsString()
    email2?: string;

    @IsOptional()
    @IsString()
    email3?: string;

    @IsOptional()
    @IsString()
    email4?: string; 
}
    



