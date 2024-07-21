import { Injectable } from '@nestjs/common';
import { CreateNumeroDto } from './dto/create-numero.dto';
import { UpdateNumeroDto } from './dto/update-numero.dto';
import { Numero } from './entities/numero.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NumeroService {

  
  
  constructor(
    @InjectModel(Numero.name) private readonly numeroModel : Model<Numero>,
  ){}
  async create(createNumeroDto: CreateNumeroDto) {
    try {
      const num = await this.numeroModel.create(createNumeroDto);
      return num;
    } catch (error) {
      throw(error)
    }
    
    
  }

  findAll() {
    return `This action returns all numero`;
  }

  async findOne(id: string) {
    try {
      const num = await this.numeroModel.findById(id).then((number) => number.numero);
      return num;
      
    } catch (error) {
      throw(error)
    }
    
  }

  async update(id: string, updateNumeroDto: UpdateNumeroDto) {
    
    return this.numeroModel.findByIdAndUpdate(id, updateNumeroDto);
  }

  remove(id: number) {
    return `This action removes a #${id} numero`;
  }
}
