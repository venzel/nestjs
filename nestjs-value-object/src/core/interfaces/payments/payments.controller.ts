import { CreatePaymentDto, ResponsePaymentDto } from './dtos';

export interface PaymentsController {
    create(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto>;

    findOne(id: string): Promise<ResponsePaymentDto>;

    list(): Promise<ResponsePaymentDto[]>;
}
