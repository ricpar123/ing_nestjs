import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumeroService } from './numero.service';
import { CreateNumeroDto } from './dto/create-numero.dto';
import { UpdateNumeroDto } from './dto/update-numero.dto';

@Controller('numero')
export class NumeroController {
  
  
  constructor(private readonly numeroService: NumeroService) {}

  @Post()
  create(@Body() createNumeroDto: CreateNumeroDto) {
    return this.numeroService.create(createNumeroDto);
  }

  @Get()
  findAll() {
    return this.numeroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.numeroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNumeroDto: UpdateNumeroDto) {
    
    return this.numeroService.update(id, updateNumeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numeroService.remove(+id);
  }
}
