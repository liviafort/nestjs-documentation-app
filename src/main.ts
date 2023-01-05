import { NestFactory } from '@nestjs/core'; //permitem criar uma instância do aplicativo.
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule); // retorna um objeto de aplicação, que preenche a INestApplicationinterface
  await app.listen(8000);
}
bootstrap();
