import { Injectable } from '@nestjs/common';
import { CreatePaymentDto, ResponsePaymentDto } from '../../dtos/payment-dtos.barrel';
import { PaymentBaseService } from './payment-base.service';

@Injectable()
export class CreatePaymentService extends PaymentBaseService {
    async execute(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const payment = this.paymentRepository.create(createPaymentDto);

        return payment;
    }
}
