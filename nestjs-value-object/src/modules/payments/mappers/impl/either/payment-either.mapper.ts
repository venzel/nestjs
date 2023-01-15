import { UnprocessableEntityException } from '@nestjs/common';
import { PaymentEitherEntity } from 'src/modules/payments/domain/impl/either/payment-either.entity';
import { CreatePaymentDto } from 'src/modules/payments/dtos/payment-dtos.barrel';
import { PaymentMapper } from '../../payment.mapper';
import { ResponsePaymentDto } from './../../../dtos/impl/response-payment.dto';

export class PaymentEitherMapper implements PaymentMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentEitherEntity {
        const PaymentOrError = PaymentEitherEntity.create(createPaymentDto);

        if (PaymentOrError.isLeft())
            throw new UnprocessableEntityException(PaymentOrError.value.message);

        return PaymentOrError.value;
    }

    toDto(payment: PaymentEitherEntity): ResponsePaymentDto {
        const { id, amount, discount, description, createdAt } = payment;

        return ResponsePaymentDto.create(id, amount, discount, description, createdAt);
    }

    toListDto(payments: PaymentEitherEntity[]): ResponsePaymentDto[] {
        return payments.map(({ id, amount, discount, description, createdAt }) =>
            ResponsePaymentDto.create(id, amount, discount, description, createdAt),
        );
    }
}
