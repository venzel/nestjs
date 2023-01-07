import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from '../../dtos/impl/response-payment.dto';

@Injectable()
export class FindOnePaymentService {
    async execute(id: string): Promise<ResponsePaymentDto> {
        return new ResponsePaymentDto();
    }
}
