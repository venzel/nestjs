import { Inject } from '@nestjs/common';
import { PaymentsRepository } from '../../../interfaces';

export abstract class PaymentBetaBaseService {
    constructor(
        @Inject('PAYMENT_REPOSITORY')
        protected readonly paymentsRepository: PaymentsRepository,
    ) {}
}
