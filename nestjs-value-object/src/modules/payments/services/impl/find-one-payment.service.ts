import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from '../../dtos/impl/response-payment.dto';
import { PaymentBaseService } from './payment-base.service';

@Injectable()
export class FindOnePaymentService extends PaymentBaseService {
    async execute(id: string): Promise<ResponsePaymentDto> {
        const existsPayment = await this.paymentRepository.findOneById(id);

        return existsPayment;
    }
}
