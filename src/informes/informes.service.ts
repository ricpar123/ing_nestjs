import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateInformeDto } from "./dto/create-Informe.dto";
import { UpdateInformeDto } from './dto/update-informe.dto';
import { Informe } from './entities/informe.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()

export class InformesService {

  constructor(
    @InjectModel(Informe.name) private readonly informeModel : Model<Informe>,
  ){}
  
   async create(createInformeDto: CreateInformeDto) {
    try {
      const informe = await this.informeModel.create(createInformeDto);
      return informe;
    } catch (error) {
      this.handleExceptions(error);
    }
 
  }

  findAll() {
    return `This action returns all informes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} informe`;
  }

  update(id: number, updateInformeDto: UpdateInformeDto) {
    return `This action updates a #${id} informe`;
  }

  remove(id: number) {
    return `This action removes a #${id} informe`;
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Cliente exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`No se pudo crear Cliente - Ver server logs`);
  }
}
