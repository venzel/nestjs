import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from 'modules/payments/interfaces/dtos';
import { PaymentAlphaBaseService } from './payment-alpha-base.service';

@Injectable()
export class FindOnePaymentAlphaService extends PaymentAlphaBaseService {
    async execute(id: string): Promise<ResponsePaymentDto> {
        const existsPayment = await this.paymentsRepository.findOneById(id);

        return existsPayment;
    }
}
