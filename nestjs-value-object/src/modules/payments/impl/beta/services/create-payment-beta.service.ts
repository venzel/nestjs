import { Injectable } from '@nestjs/common';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { PaymentBetaBaseService } from './payment-beta-base.service';

@Injectable()
export class CreatePaymentBetaService extends PaymentBetaBaseService {
    async execute(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const payment = this.paymentsRepository.create(createPaymentDto);

        return payment;
    }
}
