import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';
import { getConnection } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  initSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await getConnection()
    .createQueryBuilder()
    .insert()
    .into('tesacom.users')
    .values({
      email: 'admin@email.com',
      password: '12345678',
      name: 'Super',
      lastname: 'Admin',
    })
    .orIgnore()
    .execute();

  await app.listen(3000);
  logger.log('Server running');
  //  logger.log('Server running: ${ await app.getUrl() }')
}
bootstrap();
