//O objetivo de um controlador é receber solicitações específicas para o aplicativo. O mecanismo de roteamento controla qual controlador recebe quais solicitações.
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
