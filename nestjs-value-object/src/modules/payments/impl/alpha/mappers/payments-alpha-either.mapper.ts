import { UnprocessableEntityException } from '@nestjs/common';
import { PaymentsMapper } from 'src/modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';
import { ResponsePaymentAlphaDto } from '../dtos';
import { PaymentAlphaEitherEntity } from '../entities/payment-alpha-either.entity';

export class PaymentsAlphaEitherMapper implements PaymentsMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentAlphaEitherEntity {
        const PaymentOrError = PaymentAlphaEitherEntity.create(createPaymentDto);

        if (PaymentOrError.isLeft())
            throw new UnprocessableEntityException(PaymentOrError.value.message);

        return PaymentOrError.value;
    }

    toDto(payment: PaymentAlphaEitherEntity): ResponsePaymentDto {
        const { id, amount, discount, description, createdAt } = payment;

        return ResponsePaymentAlphaDto.create(id, amount, discount, description, createdAt);
    }

    toListDto(payments: PaymentAlphaEitherEntity[]): ResponsePaymentDto[] {
        return payments.map(({ id, amount, discount, description, createdAt }) =>
            ResponsePaymentAlphaDto.create(id, amount, discount, description, createdAt),
        );
    }
}
