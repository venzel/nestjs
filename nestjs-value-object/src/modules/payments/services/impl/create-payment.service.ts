import { Injectable } from '@nestjs/common';
import { CreatePaymentDto, ResponsePaymentDto } from '../../dtos/payment-dtos.barrel';

@Injectable()
export class CreatePaymentService {
    async execute(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        return new ResponsePaymentDto();
    }
}
