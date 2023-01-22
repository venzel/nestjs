import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { PaymentBetaBaseService } from './payment-beta-base.service';

@Injectable()
export class ListPaymentsBetaService extends PaymentBetaBaseService {
    async execute(): Promise<ResponsePaymentDto[]> {
        return this.paymentsRepository.list();
    }
}
