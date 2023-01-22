import { Injectable } from '@nestjs/common';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { PaymentBaseService } from './payment-base-impl.service';

@Injectable()
export class CreatePaymentImplService extends PaymentBaseService {
    async execute(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const payment = this.paymentsRepository.create(createPaymentDto);

        return payment;
    }
}
