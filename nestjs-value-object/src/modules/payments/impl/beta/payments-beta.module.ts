import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserIdCheckMiddleware } from 'core/middlewares/user-id-check.middleware';
import { PaymentsBetaController } from './controllers/payments-beta.controller';
import { PaymentsBetaValueMapper } from './mappers/payments-beta-value.mapper';
import { PaymentsBetaMockRepository } from './repositories/payments-beta-mock.repository';
import {
    CreatePaymentBetaService,
    FindOnePaymentBetaService,
    ListPaymentsBetaService,
} from './services';
import { PaymentBetaServicesAdapter } from './services/payment-beta-services.adapter';

@Module({
    controllers: [PaymentsBetaController],
    exports: [],
    providers: [
        PaymentBetaServicesAdapter,
        FindOnePaymentBetaService,
        CreatePaymentBetaService,
        ListPaymentsBetaService,
        {
            provide: 'PAYMENT_REPOSITORY',
            useClass: PaymentsBetaMockRepository,
        },
        {
            provide: 'PAYMENT_MAPPER',
            useClass: PaymentsBetaValueMapper,
        },
    ],
})
export class PaymentsBetaModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: 'payments/:id',
            method: RequestMethod.ALL,
        });
    }
}
