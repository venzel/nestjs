import { CreatePaymentDto, ResponsePaymentDto } from './dtos';

export interface PaymentRepository {
    create(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto>;

    findOneById(paymentId: string): Promise<ResponsePaymentDto | undefined>;

    list(): Promise<ResponsePaymentDto[]>;
}
