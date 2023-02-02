import { Inject } from '@nestjs/common';
import { PaymentRepository } from '../../../interfaces';

export abstract class PaymentBetaBaseService {
    constructor(
        @Inject('PAYMENT_REPOSITORY')
        protected readonly paymentRepository: PaymentRepository,
    ) {}
}
