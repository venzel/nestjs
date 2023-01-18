import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from 'src/core/interfaces/payments/dtos';
import { PaymentBaseService } from './payment-base-impl.service';

@Injectable()
export class FindOnePaymentImplService extends PaymentBaseService {
    async execute(id: string): Promise<ResponsePaymentDto> {
        const existsPayment = await this.paymentsRepository.findOneById(id);

        return existsPayment;
    }
}
