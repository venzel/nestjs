import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { PaymentAlphaBaseService } from './payment-alpha-base.service';

@Injectable()
export class ListPaymentsAlphaService extends PaymentAlphaBaseService {
    async execute(): Promise<ResponsePaymentDto[]> {
        return this.paymentsRepository.list();
    }
}
