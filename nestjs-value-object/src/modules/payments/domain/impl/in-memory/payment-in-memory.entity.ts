import { randomUUID } from 'node:crypto';
import { CreatePaymentDto } from 'src/modules/payments/dtos/payment-dtos.barrel';
import { PaymentEntity } from '../../payment.entity';
import { Amount, CreatedAt, Description, Discount, Id } from './types/payment-type.barril';

interface PaymentProps {
    id?: Id;
    amount: Amount;
    discount: Discount;
    description: Description;
    createdAt: CreatedAt;
}

export class PaymentInMemoryEntity implements PaymentEntity {
    private constructor(private readonly props: PaymentProps) {}

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

    static create(dto: CreatePaymentDto): PaymentEntity {
        const idFactory = Id.create(randomUUID());
        const amountFactory = Amount.create(dto.amount);
        const discountFactory = Discount.create(dto.discount);
        const descriptionFactory = Description.create(dto.description);
        const createdAtFactory = CreatedAt.create(new Date());

        return new PaymentInMemoryEntity({
            id: idFactory,
            amount: amountFactory,
            discount: discountFactory,
            description: descriptionFactory,
            createdAt: createdAtFactory,
        });
    }
}
