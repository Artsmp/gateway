import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  // 接口版本化管理
  app.enableVersioning({
    type: VersioningType.URI,
    // defaultVersion: '1',
    defaultVersion: [VERSION_NEUTRAL, '1', '2'],
  });

  await app.listen(3000);
}
bootstrap();
