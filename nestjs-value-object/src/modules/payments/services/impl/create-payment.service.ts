import { Injectable } from '@nestjs/common';
import { CreatePaymentDto, ResposePaymentDto } from '../../dtos/payment-dtos.barrel';

@Injectable()
export class CreatePaymentService {
    async execute(dto: CreatePaymentDto): Promise<ResposePaymentDto> {
        return new ResposePaymentDto();
    }
}
