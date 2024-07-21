import { IsInt} from "class-validator";




export class CreateNumeroDto {

    
    @IsInt()
    numero: number = 5000;  

}
