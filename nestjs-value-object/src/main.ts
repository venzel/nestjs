import { ClassSerializerInterceptor, VersioningType } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import baseConfig from './core/configs/base.config';
import { GlobalException } from './core/exceptions/global.exception';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.useGlobalFilters(new GlobalException());

    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

    app.setGlobalPrefix('api');

    app.enableVersioning({
        type: VersioningType.URI,
    });

    const config = baseConfig();

    await app.listen(config.API_PORT);
}
bootstrap();
