import { Inject } from '@nestjs/common';
import { PaymentsRepository } from '../../../interfaces';

export abstract class PaymentBaseService {
    constructor(
        @Inject('PAYMENT_REPOSITORY')
        protected readonly paymentsRepository: PaymentsRepository,
    ) {}
}
