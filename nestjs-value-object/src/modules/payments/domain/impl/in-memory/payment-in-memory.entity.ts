import { randomUUID } from 'node:crypto';
import { CreatePaymentDto } from 'src/modules/payments/dtos/payment-dtos.barrel';
import { PaymentEntity } from '../../payment.entity';
import { Amount, CreatedAt, Description, Discount, Id } from './types/payment-type.barril';

interface PaymentEntityProps {
    id?: Id;
    amount: Amount;
    discount: Discount;
    description: Description;
    createdAt: CreatedAt;
}

export class PaymentInMemoryEntity implements PaymentEntity {
    constructor(private readonly props: PaymentEntityProps) {}

    get id(): string {
        return this.props.id.value;
    }

    get amount(): Number {
        return this.props.amount.value;
    }

    get discount(): Number {
        return this.props.discount.value;
    }

    get description(): string {
        return this.props.description.value;
    }

    get createdAt(): Date {
        return this.props.createdAt.value;
    }

    static create(dto: CreatePaymentDto): PaymentInMemoryEntity {
        const factory: PaymentEntityProps = {
            id: Id.create(dto.id || randomUUID()),
            amount: Amount.create(dto.amount),
            discount: Discount.create(dto.discount),
            description: Description.create(dto.description),
            createdAt: CreatedAt.create(new Date()),
        };

        return new PaymentInMemoryEntity(factory);
    }
}
