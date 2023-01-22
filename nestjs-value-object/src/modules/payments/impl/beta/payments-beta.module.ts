import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserIdCheckMiddleware } from 'src/core/middlewares/user-id-check.middleware';
import { PaymentsBetaController } from './controllers/payments-beta.controller';
import { PaymentsBetaEitherMapper } from './mappers/payments-beta-either.mapper';
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
            useClass: PaymentsBetaEitherMapper,
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
