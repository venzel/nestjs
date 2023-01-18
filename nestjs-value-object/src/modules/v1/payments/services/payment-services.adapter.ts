import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from 'src/core/interfaces/payments/dtos';
import {
    CreatePaymentImplService,
    FindOnePaymentImplService,
    ListPaymentsImplService,
} from './impl';

@Injectable()
export class PaymentServicesAdapter {
    constructor(
        private readonly createPaymentService: CreatePaymentImplService,
        private readonly findOnePaymentService: FindOnePaymentImplService,
        private readonly listPaymentsService: ListPaymentsImplService,
    ) {}

    create(createPaymentDto: CreatePaymentDto) {
        return this.createPaymentService.execute(createPaymentDto);
    }

    findOne(id: string) {
        return this.findOnePaymentService.execute(id);
    }

    list() {
        return this.listPaymentsService.execute();
    }
}
