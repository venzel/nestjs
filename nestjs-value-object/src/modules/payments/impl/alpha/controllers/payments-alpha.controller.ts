import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ParamUUID } from '@decorators/param-uuid.decorator';
import { NotContentInterceptor } from '@interceptors/not-content.interceptor';
import { PaymentsController } from '@payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from '@payments/interfaces/dtos';
import { PaymentAlphaServicesAdapter } from '../services/payment-alpha-services.adapter';
import { pathsConfig } from '@configs/paths.config';
const { path, deleteOne } = pathsConfig.payments;

@Controller({ path, version: '1' })
@UseInterceptors(NotContentInterceptor)
export class PaymentsAlphaController implements PaymentsController {
    constructor(private readonly service: PaymentAlphaServicesAdapter) {}

    @Post()
    async create(@Body() createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        return await this.service.create(createPaymentDto);
    }

    @Get(deleteOne)
    async findOne(@ParamUUID() id: string): Promise<ResponsePaymentDto> {
        return await this.service.findOne(id);
    }

    @Get()
    async list(): Promise<ResponsePaymentDto[]> {
        return await this.service.list();
    }
}
