import { Inject } from '@nestjs/common';
import { PaymentRepository } from '../../repositories/payment.repository';

export abstract class PaymentBaseService {
    constructor(
        @Inject('PAYMENT_REPOSITORY')
        protected readonly paymentRepository: PaymentRepository,
    ) {}
}
