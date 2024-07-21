import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './entities/usuario.entity';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/login-user.dto';
import { response } from 'express';



@Injectable()
export class UsuariosService {
    constructor(
      @InjectModel(Usuario.name) private readonly usuarioModel : Model<Usuario>,
    ){}
  
  async login(loginUserDto:LoginUserDto){

    const { userid, clave } = loginUserDto;
    const user = await this.usuarioModel.findOne({userid});

    if(!user) {
      throw new UnauthorizedException('userid no encontrado en BD');
    }
    if(user.clave != clave){
      throw new UnauthorizedException('password incorrecto');
    }

    return user;
    
      
    



  }
  


  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Usuario exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`No se pudo crear Usuario - Ver server logs`);
  }
}
