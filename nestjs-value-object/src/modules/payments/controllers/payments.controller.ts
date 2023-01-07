import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePaymentDto } from '../dtos/payment-dtos.barrel';
import { PaymentServicesAdapter } from '../services/payment-services.adapter';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsServiceAdapter: PaymentServicesAdapter) {}

    @Post()
    create(@Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentsServiceAdapter.create(createPaymentDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.paymentsServiceAdapter.findOne(id);
    }

    @Get()
    list() {
        return this.paymentsServiceAdapter.list();
    }
}
