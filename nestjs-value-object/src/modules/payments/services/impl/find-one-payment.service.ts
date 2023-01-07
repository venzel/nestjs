import { Injectable } from '@nestjs/common';
import { ResposePaymentDto } from '../../dtos/response-payment.dto';

@Injectable()
export class FindOnePaymentService {
    async execute(id: string): Promise<ResposePaymentDto> {
        return new ResposePaymentDto();
    }
}
