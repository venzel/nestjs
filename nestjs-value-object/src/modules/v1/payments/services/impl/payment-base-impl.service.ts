import { Inject } from '@nestjs/common';
import { PaymentsRepository } from 'src/core/interfaces/payments';

export abstract class PaymentBaseService {
    constructor(
        @Inject('PAYMENT_REPOSITORY')
        protected readonly paymentsRepository: PaymentsRepository,
    ) {}
}
