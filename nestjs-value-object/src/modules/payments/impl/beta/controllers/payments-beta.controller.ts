import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ParamUUID } from 'core/decorators/param-uuid.decorator';
import { NotContentInterceptor } from 'core/interceptors/not-content.interceptor';
import { PaymentsController } from 'modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'modules/payments/interfaces/dtos';
import { PaymentBetaServicesAdapter } from '../services/payment-beta-services.adapter';
import { pathsConfig } from '@configs/paths.config';
const { path, findOne } = pathsConfig.payments;

@Controller({ path, version: '2' })
@UseInterceptors(NotContentInterceptor)
export class PaymentsBetaController implements PaymentsController {
    constructor(private readonly service: PaymentBetaServicesAdapter) {}

    @Post()
    async create(@Body() createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        return await this.service.create(createPaymentDto);
    }

    @Get(findOne)
    async findOne(@ParamUUID() id: string): Promise<ResponsePaymentDto> {
        return await this.service.findOne(id);
    }

    @Get()
    async list(): Promise<ResponsePaymentDto[]> {
        return await this.service.list();
    }
}
