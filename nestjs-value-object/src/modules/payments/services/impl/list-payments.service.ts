import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from '../../dtos/impl/response-payment.dto';
import { PaymentBaseService } from './payment-base.service';

@Injectable()
export class ListPaymentsService extends PaymentBaseService {
    async execute(): Promise<ResponsePaymentDto[]> {
        return this.paymentRepository.list();
    }
}
