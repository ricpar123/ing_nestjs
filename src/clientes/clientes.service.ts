import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class ClientesService {
  
  constructor(
    @InjectModel(Cliente.name) private readonly clienteModel : Model<Cliente>,
  ){}
  
  async create(createClienteDto: CreateClienteDto) {
    try {
      const cliente = await this.clienteModel.create(createClienteDto);
      return cliente;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    const clientes = await this.clienteModel.find();
    return clientes;
  }

  async  findOne(id: string) {
    const cliente = await this.clienteModel.findById(id); 
    return cliente;
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    const updatedCliente = await this.clienteModel.findByIdAndUpdate(
      id, updateClienteDto, {
        new: true
      });
      if( !updatedCliente){
        throw new NotFoundException('Error....Cliente no encontrado!!');
      }
    return updatedCliente;
  }

  async remove(id: string) {
    const deletedCliente = await this.clienteModel.findByIdAndDelete(id);
    if( !deletedCliente){
      throw new NotFoundException('Error....Cliente no encontrado');
    }
   
    return deletedCliente;
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Cliente exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`No se pudo crear Cliente - Ver server logs`);
  }
}
