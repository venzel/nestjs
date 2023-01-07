import { Module } from '@nestjs/common';
import { PaymentsController } from './infra/controllers/payments.controller';
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
        CreatePaymentService,
        FindOnePaymentService,
        ListPaymentsService,
    ],
})
export class PaymentsModule {}
