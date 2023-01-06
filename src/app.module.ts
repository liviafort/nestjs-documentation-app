import { Module } from '@nestjs/common';
import { TesteModule } from './teste/teste.module';

@Module({
  imports: [TesteModule],
})
export class AppModule {}
