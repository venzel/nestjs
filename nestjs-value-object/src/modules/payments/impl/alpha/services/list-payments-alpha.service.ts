import { Inject, Injectable } from '@nestjs/common';
import { PaymentRepository } from '@payments/interfaces';
import { ResponsePaymentDto } from 'modules/payments/interfaces/dtos';

@Injectable()
export class ListPaymentsAlphaService {
    constructor(
        @Inject('PAYMENT_REPOSITORY')
        protected readonly paymentRepository: PaymentRepository,
    ) {}

    async execute(): Promise<ResponsePaymentDto[]> {
        return this.paymentRepository.list();
    }
}
