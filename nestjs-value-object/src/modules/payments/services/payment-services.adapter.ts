import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dtos/impl/create-payment.dto';
import {
    CreatePaymentService,
    FindOnePaymentService,
    ListPaymentsService,
} from './payment-services.barrel';

@Injectable()
export class PaymentServicesAdapter {
    constructor(
        private readonly createPaymentService: CreatePaymentService,
        private readonly findOnePaymentService: FindOnePaymentService,
        private readonly listPaymentsService: ListPaymentsService,
    ) {}

    create(dto: CreatePaymentDto) {
        return this.createPaymentService.execute(dto);
    }

    findOne(id: string) {
        return this.findOnePaymentService.execute(id);
    }

    list() {
        return this.listPaymentsService.execute();
    }
}
