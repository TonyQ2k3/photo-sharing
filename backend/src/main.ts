import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3001s';
  app.enableCors({
    origin: FRONTEND_URL,
    credentials: true,
  });

  await app.listen(8080);
}
bootstrap();
