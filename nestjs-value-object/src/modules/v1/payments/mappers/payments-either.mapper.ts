import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PaymentsMapper } from 'src/core/interfaces/payments';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/core/interfaces/payments/dtos';
import { ResponsePaymentImplDto } from '../dtos/impl';
import { PaymentEitherEntity } from '../entities/payment-either.entity';

@Injectable()
export class PaymentsEitherMapper implements PaymentsMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentEitherEntity {
        const PaymentOrError = PaymentEitherEntity.create(createPaymentDto);

        if (PaymentOrError.isLeft())
            throw new UnprocessableEntityException(PaymentOrError.value.message);

        return PaymentOrError.value;
    }

    toDto(payment: PaymentEitherEntity): ResponsePaymentDto {
        const { id, amount, discount, description, createdAt } = payment;

        return ResponsePaymentImplDto.create(id, amount, discount, description, createdAt);
    }

    toListDto(payments: PaymentEitherEntity[]): ResponsePaymentDto[] {
        return payments.map(({ id, amount, discount, description, createdAt }) =>
            ResponsePaymentImplDto.create(id, amount, discount, description, createdAt),
        );
    }
}
