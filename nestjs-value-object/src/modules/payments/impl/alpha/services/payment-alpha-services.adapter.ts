import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from 'modules/payments/interfaces/dtos';
import { CreatePaymentAlphaService } from './create-payment-alpha.service';
import { FindOnePaymentAlphaService } from './find-one-payment-alpha.service';
import { ListPaymentsAlphaService } from './list-payments-alpha.service';

@Injectable()
export class PaymentAlphaServicesAdapter {
    constructor(
        private readonly createPaymentService: CreatePaymentAlphaService,
        private readonly findOnePaymentService: FindOnePaymentAlphaService,
        private readonly listPaymentsService: ListPaymentsAlphaService,
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
