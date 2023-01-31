import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from 'modules/payments/interfaces/dtos';
import { CreatePaymentBetaService } from './create-payment-beta.service';
import { FindOnePaymentBetaService } from './find-one-payment-beta.service';
import { ListPaymentsBetaService } from './list-payments-beta.service';

@Injectable()
export class PaymentBetaServicesAdapter {
    constructor(
        private readonly createPaymentService: CreatePaymentBetaService,
        private readonly findOnePaymentService: FindOnePaymentBetaService,
        private readonly listPaymentsService: ListPaymentsBetaService,
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
