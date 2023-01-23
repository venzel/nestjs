import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParamUUID } from 'src/core/decorators/param-uuid.decorator';
import { PaymentsController } from 'src/modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';

@Controller({ path: 'payments', version: '3' })
export class PaymentsOmegaController implements PaymentsController {
    constructor() {}

    @Post()
    async create(@Body() createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        return null;
    }

    @Get(':id')
    async findOne(@ParamUUID() id: string): Promise<ResponsePaymentDto> {
        return null;
    }

    @Get()
    async list(): Promise<ResponsePaymentDto[]> {
        return null;
    }
}