import { Inject, Injectable, Logger } from '@nestjs/common';
import { PaymentRepository } from '@payments/interfaces';
import { ShippingEnum } from '@providers/external/shipping/shipping.enum';
import { ShippingEstrategy } from '@providers/external/shipping/shipping.estrategy';
import { ShippingProvider } from '@providers/external/shipping/shipping.provider';
import { CreatePaymentDto, ResponsePaymentDto } from 'modules/payments/interfaces/dtos';

@Injectable()
export class CreatePaymentAlphaService {
    protected readonly logger: Logger;

    constructor(
        @Inject('PAYMENT_REPOSITORY')
        protected readonly paymentRepository: PaymentRepository,

        @Inject('SHIPPING_STRATEGY')
        protected readonly shippingStrategy: ShippingEstrategy,
    ) {
        this.logger = new Logger(CreatePaymentAlphaService.name);
    }

    async execute(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const shipping = ShippingEnum.FEDEX;

        const getRate = await this.shippingStrategy.getRate(shipping);

        const payment = this.paymentRepository.create(createPaymentDto);

        return payment;
    }
}
