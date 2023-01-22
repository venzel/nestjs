import { PaymentEntity } from './payment.entity';
import { CreatePaymentDto, ResponsePaymentDto } from './dtos';

export interface PaymentsMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentEntity;

    toDto(payment: PaymentEntity): ResponsePaymentDto;

    toListDto(payments: PaymentEntity[]): ResponsePaymentDto[];
}
