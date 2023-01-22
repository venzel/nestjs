import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ParamUUID } from 'src/core/decorators/param-uuid.decorator';
import { NotContentInterceptor } from 'src/core/interceptors/not-content.interceptor';
import { PaymentsController } from 'src/modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { PaymentAlphaServicesAdapter } from '../services/payment-alpha-services.adapter';

@Controller({ path: 'payments', version: '1' })
@UseInterceptors(NotContentInterceptor)
export class PaymentsAlphaController implements PaymentsController {
    constructor(private readonly paymentsServiceAdapter: PaymentAlphaServicesAdapter) {}

    @Post()
    async create(@Body() createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        return await this.paymentsServiceAdapter.create(createPaymentDto);
    }

    @Get(':id')
    async findOne(@ParamUUID() id: string): Promise<ResponsePaymentDto> {
        return await this.paymentsServiceAdapter.findOne(id);
    }

    @Get()
    async list(): Promise<ResponsePaymentDto[]> {
        return await this.paymentsServiceAdapter.list();
    }
}
