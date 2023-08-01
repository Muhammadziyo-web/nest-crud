import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))
  await app.listen(3000);
}
bootstrap();

console.log(process.env.PORT);  
