import { Module } from '@nestjs/common';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentInMemoryMapper } from './mappers/impl/in-memory/payment-in-memory.mapper';
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
        PaymentInMemoryMapper,
        PaymentInMemoryRepository,
        {
            provide: 'PAYMENT_REPOSITORY',
            useClass: PaymentInMemoryRepository,
        },
    ],
})
export class PaymentsModule {}
