import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ParamUUID } from 'src/core/decorators/param-uuid.decorator';
import { NotContentInterceptor } from 'src/core/interceptors/not-content.interceptor';
import { CreatePaymentDto, ResponsePaymentDto } from '../dtos/payment-dtos.barrel';
import { PaymentServicesAdapter } from '../services/payment-services.adapter';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsServiceAdapter: PaymentServicesAdapter) {}

    @Post()
    async create(@Body() createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        return await this.paymentsServiceAdapter.create(createPaymentDto);
    }

    @UseInterceptors(NotContentInterceptor)
    @Get(':id')
    async findOne(@ParamUUID() id: string): Promise<ResponsePaymentDto> {
        return await this.paymentsServiceAdapter.findOne(id);
    }

    @Get()
    async list(): Promise<ResponsePaymentDto[]> {
        return await this.paymentsServiceAdapter.list();
    }
}
