import { randomUUID } from 'node:crypto';
import { CreatePaymentDto } from 'src/modules/payments/dtos/payment-dtos.barrel';
import { PaymentEntity } from '../../payment.entity';

export class PaymentInMemoryEntity implements PaymentEntity {
    constructor(private readonly props: CreatePaymentDto) {}

    get id(): string {
        return randomUUID();
    }

    get amount(): Number {
        return this.props.amount;
    }

    get discount(): Number {
        return this.props.discount;
    }

    get description(): string {
        return this.props.description;
    }

    static create(createPaymentDto: CreatePaymentDto): PaymentInMemoryEntity {
        return new PaymentInMemoryEntity(createPaymentDto);
    }
}
