import { ClassSerializerInterceptor, VersioningType } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './app.module';
import baseConfig from './core/configs/base.config';
import { winstonConfig } from './core/configs/winston.config';
import { GlobalException } from './core/exceptions/global.exception';

async function bootstrap() {
    const logger = WinstonModule.createLogger(winstonConfig);

    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.useGlobalFilters(new GlobalException());

    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

    app.setGlobalPrefix('api');

    app.enableVersioning({
        type: VersioningType.URI,
    });

    const { API_PORT } = baseConfig();

    await app.listen(API_PORT);

    logger.log(`Initialized in port ${API_PORT}.`);
}
bootstrap();
