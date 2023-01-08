import { Module } from '@nestjs/common';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentEitherMapper } from './mappers/impl/either/payment-either.mapper';
import { PaymentInMemoryRepository } from './repositories/impl/in-memory/payment-in-memory.repository';
import { PaymentServicesAdapter } from './services/payment-services.adapter';
import {
    CreatePaymentService,
    FindOnePaymentService,
    ListPaymentsService,
} from './services/payment-services.barrel';

@Module({
    controllers: [PaymentsController],
    providers: [
        PaymentServicesAdapter,
        FindOnePaymentService,
        CreatePaymentService,
        ListPaymentsService,
        {
            provide: 'PAYMENT_REPOSITORY',
            useClass: PaymentInMemoryRepository,
        },
        {
            provide: 'PAYMENT_MAPPER',
            useClass: PaymentEitherMapper,
        },
    ],
})
export class PaymentsModule {}
