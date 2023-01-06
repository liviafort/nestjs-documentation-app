import { Injectable } from '@nestjs/common';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
import { Teste } from './interfaces/teste.interface';

@Injectable()
export class TesteService {

  private readonly testes: Teste[] = [] //essa abreviação nos permite declarar e inicializar o testeService membro imediatamente no mesmo local.
  //não funciona ----> constructor(private testes: Teste) {}

  create(teste: Teste) {
    this.testes.push(teste);
  }

  findAll(): Teste[] {
    return this.testes;
  }

  findOne(id: number) {
    return `This action returns a #${id} teste`;
  }

  update(id: number, updateTesteDto: UpdateTesteDto) {
    return `This action updates a #${id} teste`;
  }

  remove(id: number) {
    return `This action removes a #${id} teste`;
  }

  getName(): string{
    return "LIVIAAAAAAA";
  }
}
