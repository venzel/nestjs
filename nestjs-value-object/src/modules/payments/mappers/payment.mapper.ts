import { PaymentEntity } from '../domain/payment.entity';
import { CreatePaymentDto, ResponsePaymentDto } from '../dtos/payment-dtos.barrel';

export interface PaymentMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentEntity;

    toDto(payment: PaymentEntity): ResponsePaymentDto;

    toListDto(payments: PaymentEntity[]): ResponsePaymentDto[];
}
