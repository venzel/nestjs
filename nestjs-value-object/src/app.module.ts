import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import baseConfig from './core/configs/base.config';
import typeormConfig from './core/configs/typeorm.config';
import { winstonConfig } from './core/configs/winston.config';
import { LoggerInterceptor } from './core/interceptors/logger.interceptor';
import { PaymentsAlphaModule } from './modules/payments/impl/alpha/payments-alpha.module';
import { PaymentsBetaModule } from './modules/payments/impl/beta/payments-beta.module';
import { PaymentsOmegaModule } from './modules/payments/impl/omega/payments-omega.module';

@Module({
    imports: [
        PaymentsAlphaModule,
        PaymentsBetaModule,
        PaymentsOmegaModule,
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
