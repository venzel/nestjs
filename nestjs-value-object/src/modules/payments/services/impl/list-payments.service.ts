import { Injectable } from '@nestjs/common';
import { ResponsePaymentDto } from '../../dtos/impl/response-payment.dto';

@Injectable()
export class ListPaymentsService {
    async execute(): Promise<ResponsePaymentDto[]> {
        return [];
    }
}
