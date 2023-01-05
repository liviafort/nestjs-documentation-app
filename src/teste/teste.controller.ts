import { Controller, Get, Post, Body, Patch, Param, Res, Req } from '@nestjs/common';
import { TesteService } from './teste.service';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
import { Request, response } from 'express';

@Controller('teste') //necessário para definir um controlador básico.
export class TesteController {
  constructor(private readonly testeService: TesteService) {}

  ////////////////////////////////////GET///////////////////////////////////////////////
  @Get('teste1')
  findOne(@Res() response){
    return response.status(200).send()
  }

  @Get('teste2')
  findAll(@Req() resquest: Request): string {
    return "Foi"
  }
  /*@Get('teste3')
  findOne() {
    return this.testeService.findAll(); //método retornará um código de status 200 e a resposta associada
  }*/

  /*@Post('testeGet')
  create(@Body() createTesteDto: CreateTesteDto) {
    return this.testeService.create(createTesteDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesteDto: UpdateTesteDto) {
    return this.testeService.update(+id, updateTesteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testeService.remove(+id);
  }*/
}
