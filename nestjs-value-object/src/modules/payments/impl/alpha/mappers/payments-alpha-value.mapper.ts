import { PaymentsMapper } from 'modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'modules/payments/interfaces/dtos';
import { ResponsePaymentAlphaDto } from '../dtos';
import { PaymentAlphaValueEntity } from '../entities/payment-alpha-value.entity';

export class PaymentsAlphaValueMapper implements PaymentsMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentAlphaValueEntity {
        return PaymentAlphaValueEntity.create(createPaymentDto);
    }

    toDto(payment: PaymentAlphaValueEntity): ResponsePaymentDto {
        const { id, amount, discount, description, createdAt } = payment;

        return ResponsePaymentAlphaDto.create(id, amount, discount, description, createdAt);
    }

    toListDto(payments: PaymentAlphaValueEntity[]): ResponsePaymentDto[] {
        return payments.map(({ id, amount, discount, description, createdAt }) =>
            ResponsePaymentAlphaDto.create(id, amount, discount, description, createdAt),
        );
    }
}
