import { UnprocessableEntityException } from '@nestjs/common';
import { PaymentsMapper } from 'modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'modules/payments/interfaces/dtos';
import { ResponsePaymentBetaDto } from '../dtos';
import { PaymentBetaEitherEntity } from '../entities/payment-beta-either.entity';

export class PaymentsBetaEitherMapper implements PaymentsMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentBetaEitherEntity {
        const PaymentOrError = PaymentBetaEitherEntity.create(createPaymentDto);

        if (PaymentOrError.isLeft())
            throw new UnprocessableEntityException(PaymentOrError.value.message);

        return PaymentOrError.value;
    }

    toDto(payment: PaymentBetaEitherEntity): ResponsePaymentDto {
        const { id, amount, discount, description, createdAt } = payment;

        return ResponsePaymentBetaDto.create(id, amount, discount, description, createdAt);
    }

    toListDto(payments: PaymentBetaEitherEntity[]): ResponsePaymentDto[] {
        return payments.map(({ id, amount, discount, description, createdAt }) =>
            ResponsePaymentBetaDto.create(id, amount, discount, description, createdAt),
        );
    }
}
