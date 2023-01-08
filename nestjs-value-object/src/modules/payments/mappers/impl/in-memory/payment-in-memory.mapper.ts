import { PaymentInMemoryEntity } from 'src/modules/payments/domain/impl/in-memory/payment-in-memory.entity';
import { CreatePaymentDto } from 'src/modules/payments/dtos/payment-dtos.barrel';
import { PaymentMapper } from '../../payment.mapper';
import { ResponsePaymentDto } from './../../../dtos/impl/response-payment.dto';

export class PaymentInMemoryMapper implements PaymentMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentInMemoryEntity {
        return PaymentInMemoryEntity.create(createPaymentDto);
    }

    toDto(payment: PaymentInMemoryEntity): ResponsePaymentDto {
        const { id, amount, discount, description, createdAt } = payment;

        return ResponsePaymentDto.create(id, amount, discount, description, createdAt);
    }

    toListDto(payments: PaymentInMemoryEntity[]): ResponsePaymentDto[] {
        return payments.map(({ id, amount, discount, description, createdAt }) =>
            ResponsePaymentDto.create(id, amount, discount, description, createdAt),
        );
    }
}
