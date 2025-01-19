import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
  app.setGlobalPrefix('api');
  app.enableCors();
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  const logger = new Logger(AppModule.name);
  logger.log(`Listening at: ${port}`);
  await app.listen(port);
}
bootstrap();
