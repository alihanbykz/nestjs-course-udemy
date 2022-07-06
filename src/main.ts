import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionFilter } from 'libs/filters/all-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost); 
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter)); // Global Filter ekledik
  app.setGlobalPrefix('api'); //localhost:3000/api/user
  app.useGlobalPipes(new ValidationPipe()); // validation
  const config = new DocumentBuilder()
    .setTitle('Udemy Course API Endpoints')
    .setDescription('There are all udemy nestjs course api endpoints')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
