import { IsNotEmpty, IsString, IsOptional, IsInt } from "class-validator";




export class CreateInformeDto {

    @IsOptional()
    @IsInt()
    numero: number;

    @IsString()
    cliente: string;

    @IsNotEmpty()
    @IsString()
    tecnico: string;

    @IsOptional()
    @IsString()
    equipo: string;

    @IsOptional()
    @IsString()
    marca: string;

    @IsOptional()
    @IsString()
    modelo: string;

    @IsOptional()
    @IsString()
    serie: string;

    @IsString()
    motivo: string;

    @IsString()
    tipoServicio: string;

    @IsString()
    presupuesto: string;

    @IsString()
    fecha: string;

    @IsOptional()
    @IsString()
    diasT: string;

    @IsString()
    inicio: string;

    @IsString()
    fin: string;

    @IsOptional()
    @IsString()
    local: string;

    @IsString()
    servicio: string;

    @IsOptional()
    @IsString()
    obs: string;

    @IsOptional()
    @IsString()
    recibido: string;

    @IsOptional()
    @IsString()
    firmaC: string;


    @IsString()
    firmaT: string;




}
