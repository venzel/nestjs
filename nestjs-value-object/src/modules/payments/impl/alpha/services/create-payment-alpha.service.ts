import { Injectable } from '@nestjs/common';
import { CreatePaymentDto, ResponsePaymentDto } from 'modules/payments/interfaces/dtos';
import { PaymentAlphaBaseService } from './payment-alpha-base.service';

@Injectable()
export class CreatePaymentAlphaService extends PaymentAlphaBaseService {
    async execute(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const payment = this.paymentsRepository.create(createPaymentDto);

        return payment;
    }
}
