import { Injectable } from '@nestjs/common';
import { ResposePaymentDto } from '../../dtos/response-payment.dto';

@Injectable()
export class ListPaymentsService {
    async execute(): Promise<ResposePaymentDto[]> {
        return [];
    }
}
