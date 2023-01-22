import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { PaymentBaseService } from './payment-base-impl.service';

@Injectable()
export class ListPaymentsImplService extends PaymentBaseService {
    async execute(): Promise<ResponsePaymentDto[]> {
        return this.paymentsRepository.list();
    }
}
