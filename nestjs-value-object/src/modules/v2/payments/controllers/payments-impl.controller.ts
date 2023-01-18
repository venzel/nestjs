import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParamUUID } from 'src/core/decorators/param-uuid.decorator';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/core/interfaces/payments/dtos';

@Controller({ path: 'payments', version: '2' })
export class PaymentsImplController {
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
