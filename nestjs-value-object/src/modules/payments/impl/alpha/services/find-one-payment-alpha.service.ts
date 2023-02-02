import { Inject, Injectable } from '@nestjs/common';
import { PaymentRepository } from '@payments/interfaces';
import { ResponsePaymentDto } from 'modules/payments/interfaces/dtos';

@Injectable()
export class FindOnePaymentAlphaService {
    constructor(
        @Inject('PAYMENT_REPOSITORY')
        protected readonly paymentRepository: PaymentRepository,
    ) {}

    async execute(id: string): Promise<ResponsePaymentDto> {
        const existsPayment = await this.paymentRepository.findOneById(id);

        return existsPayment;
    }
}
