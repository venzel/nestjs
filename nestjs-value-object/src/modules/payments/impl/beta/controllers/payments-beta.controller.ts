import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ParamUUID } from 'src/core/decorators/param-uuid.decorator';
import { NotContentInterceptor } from 'src/core/interceptors/not-content.interceptor';
import { PaymentsController } from 'src/modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { PaymentBetaServicesAdapter } from '../services/payment-beta-services.adapter';

@Controller({ path: 'payments', version: '2' })
@UseInterceptors(NotContentInterceptor)
export class PaymentsBetaController implements PaymentsController {
    constructor(private readonly service: PaymentBetaServicesAdapter) {}

    @Post()
    async create(@Body() createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        return await this.service.create(createPaymentDto);
    }

    @Get(':id')
    async findOne(@ParamUUID() id: string): Promise<ResponsePaymentDto> {
        return await this.service.findOne(id);
    }

    @Get()
    async list(): Promise<ResponsePaymentDto[]> {
        return await this.service.list();
    }
}
