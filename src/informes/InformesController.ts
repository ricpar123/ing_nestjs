import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { InformesService } from './informes.service';
import { CreateInformeDto } from "./dto/create-Informe.dto";
import { UpdateInformeDto } from './dto/update-informe.dto';



@Controller('informes')
export class InformesController {
  
  constructor(private readonly informesService: InformesService) { }

  @Post()
  create(@Body() createInformeDto: CreateInformeDto) {
    
    /*
    let num =  await this.numeroService.findOne(this._id);
    Logger.log(num);
    createInformeDto.numero = num;
    
    Logger.log(createInformeDto);
    let newNumber = num +1;

 //   updateNumeroDto.numero = newNumber;
   // Logger.log(updateNumeroDto);

    //await this.numeroService.update(this._id, updateNumeroDto);
   */ 
    
   return this.informesService.create(createInformeDto);
  }

  @Get()
  findAll() {
    return this.informesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInformeDto: UpdateInformeDto) {
    return this.informesService.update(+id, updateInformeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informesService.remove(+id);
  }
}
