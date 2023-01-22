import { PaymentsMapper } from 'src/modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { ResponsePaymentBetaDto } from '../dtos';
import { PaymentBetaValueEntity } from '../entities/payment-beta-value.entity';

export class PaymentsBetaValueMapper implements PaymentsMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentBetaValueEntity {
        return PaymentBetaValueEntity.create(createPaymentDto);
    }

    toDto(payment: PaymentBetaValueEntity): ResponsePaymentDto {
        const { id, amount, discount, description, createdAt } = payment;

        return ResponsePaymentBetaDto.create(id, amount, discount, description, createdAt);
    }

    toListDto(payments: PaymentBetaValueEntity[]): ResponsePaymentDto[] {
        return payments.map(({ id, amount, discount, description, createdAt }) =>
            ResponsePaymentBetaDto.create(id, amount, discount, description, createdAt),
        );
    }
}
