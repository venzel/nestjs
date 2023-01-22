import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { PaymentBetaBaseService } from './payment-beta-base.service';

@Injectable()
export class FindOnePaymentBetaService extends PaymentBetaBaseService {
    async execute(id: string): Promise<ResponsePaymentDto> {
        const existsPayment = await this.paymentsRepository.findOneById(id);

        return existsPayment;
    }
}
