import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/user.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(UserModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
