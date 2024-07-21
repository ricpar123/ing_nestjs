import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { LoginUserDto } from './dto/login-user.dto';
import { response } from 'express';



@Controller(['usuarios'])
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  
  @Post('login')
  
  async loginUser(@Body() loginUserDto: LoginUserDto){
    return this.usuariosService.login(loginUserDto);
  }

  
 
   
}

  

