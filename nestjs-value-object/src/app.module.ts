import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import baseConfig from './core/configs/base.config';
import typeormConfig from './core/configs/typeorm.config';
import { winstonConfig } from './core/configs/winston.config';
import { LoggerInterceptor } from './core/interceptors/logger.interceptor';
import { PaymentsV1Module } from './modules/payments/impl/v1/payments-v1.module';
import { PaymentsV2Module } from './modules/payments/impl/v2/payments-v2.module';

@Module({
    imports: [
        PaymentsV1Module,
        PaymentsV2Module,
        WinstonModule.forRoot(winstonConfig),
        ConfigModule.forRoot({
            isGlobal: true,
            load: [baseConfig, typeormConfig],
        }),
    ],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggerInterceptor,
        },
    ],
})
export class AppModule {}
