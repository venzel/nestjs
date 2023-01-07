import { PaymentEntity } from '../domain/payment.entity';
import { ResponsePaymentDto } from '../dtos/payment-dtos.barrel';

export interface PaymentMapper {
    toDto(payment: PaymentEntity): ResponsePaymentDto;

    toListDto(payments: PaymentEntity[]): ResponsePaymentDto[];
}
