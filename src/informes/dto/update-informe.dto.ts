import { PartialType } from '@nestjs/mapped-types';
import { CreateInformeDto } from "./create-Informe.dto";

export class UpdateInformeDto extends PartialType(CreateInformeDto) {}
