import { CreatePaymentDto } from 'src/modules/payments/dtos/payment-dtos.barrel';
import { PaymentValueObjectEntity } from '../../domain/impl/payment-value-object.entity';
import { ResponsePaymentDto } from '../../dtos/impl/response-payment.dto';
import { PaymentMapper } from '../payment.mapper';

export class PaymentValueObjectMapper implements PaymentMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentValueObjectEntity {
        return PaymentValueObjectEntity.create(createPaymentDto);
    }

    toDto(payment: PaymentValueObjectEntity): ResponsePaymentDto {
        const { id, amount, discount, description, createdAt } = payment;

        return ResponsePaymentDto.create(id, amount, discount, description, createdAt);
    }

    toListDto(payments: PaymentValueObjectEntity[]): ResponsePaymentDto[] {
        return payments.map(({ id, amount, discount, description, createdAt }) =>
            ResponsePaymentDto.create(id, amount, discount, description, createdAt),
        );
    }
}
