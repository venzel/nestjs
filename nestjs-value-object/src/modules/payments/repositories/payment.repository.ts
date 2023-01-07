import { CreatePaymentDto, ResponsePaymentDto } from '../dtos/payment-dtos.barrel';

export interface PaymentRepository {
    create(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto>;

    findOneById(paymentId: string): Promise<ResponsePaymentDto | undefined>;

    list(): Promise<ResponsePaymentDto[]>;
}
