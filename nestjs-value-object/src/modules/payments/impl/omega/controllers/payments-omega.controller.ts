import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParamUUID } from 'core/decorators/param-uuid.decorator';
import { PaymentsController } from 'modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'modules/payments/interfaces/dtos';
import { pathsConfig } from '@configs/paths.config';
const { path, deleteOne } = pathsConfig.payments;

@Controller({ path, version: '3' })
export class PaymentsOmegaController implements PaymentsController {
    constructor() {}

    @Post()
    async create(@Body() createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        return null;
    }

    @Get(deleteOne)
    async findOne(@ParamUUID() id: string): Promise<ResponsePaymentDto> {
        return null;
    }

    @Get()
    async list(): Promise<ResponsePaymentDto[]> {
        return null;
    }
}
