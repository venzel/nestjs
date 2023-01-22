import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { CreatePaymentImplService } from './create-payment-impl.service';
import { FindOnePaymentImplService } from './find-one-payment-impl.service';
import { ListPaymentsImplService } from './list-payments-impl.service';

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
