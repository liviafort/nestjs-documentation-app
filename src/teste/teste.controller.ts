import { Controller, Get, Post, Body, Patch, Param, Res, Req, HttpCode, Header, Redirect, HttpStatus } from '@nestjs/common';
import { TesteService } from './teste.service'; //PRECISA IMPORTAR PARA PODER USAR AS FUNÇÕES DE IMPLEMENTAÇÃO!!!
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
import { Request, response } from 'express';

@Controller('teste') //necessário para definir um controlador básico.
export class TesteController {
  constructor(private readonly testeService: TesteService) {
  }

  //PARTE DO CÓDIGO ESTÁ COMENTANDO POR CAUSA DO USO DAS FUNÇÕES

  ////////////////////////////////////GET///////////////////////////////////////////////
  /*@Get('teste1')
  findOne(@Res() response){
    return response.status(200).send();
  } //coloca o Nest no modo específico da biblioteca para esse manipulador e se torna responsável por gerenciar a resposta. Ao fazer isso, você deve emitir algum tipo de resposta fazendo uma chamada no response objeto (por exemplo, res.json(...)ou res.send(...)), ou o servidor HTTP travará.*/

  @Get('teste2')
  findAll(@Req() resquest: Request): string {
    return this.testeService.getName(); //função criada em serviços
  }
  /*@Get('teste3')
  findOne() {
    return this.testeService.findAll(); //método retornará um código de status 200 e a resposta associada
  }*/

  ////////////////////////////////////POST///////////////////////////////////////////////

  @Post('teste4')
  @HttpCode(204) //altera código de status (facilmente)
  @Header('control', 'none')
  //pode-se usar @Req e @Res como parâmetro do create do post
  create(): string{
    //console.log(response.header)
    return "adiciona nova conta";
  }
  /////////////////////////////REDIRECIONAMENTO ESTÁTICO//////////////////////////////////

  /*@Get('teste4') 
  @Redirect() //decorator para redirecionamento
  findOne(@Res() response){
    return response.redirect('https://nestjs.com', 301); //aqui que redireciona!!!
  }*/

  /////////////////////////////REDIRECIONAMENTO DINÂMICO//////////////////////////////////
  @Redirect()
  @Get('teste5')
  index(@Res() response) {

    interface RedirectOptions {
      url?: string;
      statusCode?: number;
    }

    function createRedirect(config: RedirectOptions): { url: string; statusCode: number } {
      let newRedirect = { url: config.url, statusCode: 301 };
      //use um if aqui para mudar de acordo com condição
      return newRedirect;
    }

    const status = createRedirect({ url: "https://github.com/liviafort"});
    console.log(status);
    //use o status 301!!!
    return response.redirect(status.url, status.statusCode);
  }

  /////////////////////////////PARÂMETROS DE ROTAS//////////////////////////////////

  /*@Get(':id')
  findOne(@Param() params): string {
  console.log(params.id); //podemos acessar o id parâmetro referenciando
  return `RETORNO DO ID: #${params.id} CONTA`;
  }*/

  //também pode passar um token de parâmetro específico para o decorador e, em seguida, fazer referência ao parâmetro de rota diretamente pelo nome no corpo do método.

  @Get(':id')
  findOne(@Param('id') id: string): string{
    return id;
  }

  /////////////////////////////ROTEAMENTOS DE SUBDOMINIOS //////////////////////////////////
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
