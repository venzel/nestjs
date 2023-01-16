import { ClassSerializerInterceptor } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import baseConfig from './core/configs/base.config';
import { HttpExceptionFilter } from './core/exceptions/http.exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.useGlobalFilters(new HttpExceptionFilter());

    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

    const config = baseConfig();

    await app.listen(config.API_PORT);
}
bootstrap();
