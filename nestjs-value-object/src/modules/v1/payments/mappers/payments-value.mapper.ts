import { PaymentsMapper } from 'src/core/interfaces/payments';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/core/interfaces/payments/dtos';
import { ResponsePaymentImplDto } from '../dtos/impl';
import { PaymentObjectEntity } from '../entities/payment-object.entity';

export class PaymentsValueMapper implements PaymentsMapper {
    toEntity(createPaymentDto: CreatePaymentDto): PaymentObjectEntity {
        return PaymentObjectEntity.create(createPaymentDto);
    }

    toDto(payment: PaymentObjectEntity): ResponsePaymentDto {
        const { id, amount, discount, description, createdAt } = payment;

        return ResponsePaymentImplDto.create(id, amount, discount, description, createdAt);
    }

    toListDto(payments: PaymentObjectEntity[]): ResponsePaymentDto[] {
        return payments.map(({ id, amount, discount, description, createdAt }) =>
            ResponsePaymentImplDto.create(id, amount, discount, description, createdAt),
        );
    }
}
