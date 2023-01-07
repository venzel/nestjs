import { randomUUID } from 'node:crypto';
import { CreatePaymentDto } from 'src/modules/payments/dtos/payment-dtos.barrel';
import { PaymentEntity } from '../../payment.entity';
import { Amount } from './types/payment-type.barril';

export interface PaymentProps {
    id?: string;
    amount: Amount;
    discount: Number;
    description: string;
    createdAt: Date;
}

export class PaymentInMemoryEntity implements PaymentEntity {
    private props: PaymentProps;

    private constructor(props: PaymentProps) {
        this.props = props;
    }

    get id(): string {
        return this.props.id;
    }

    get amount(): Number {
        return this.props.amount.value;
    }

    get discount(): Number {
        return this.props.discount;
    }

    get description(): string {
        return this.props.description;
    }

    set description(value: string) {
        this.props.description = value;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    static create(dto: CreatePaymentDto): PaymentEntity {
        const amountFactory = Amount.create(dto.amount);

        return new PaymentInMemoryEntity({
            id: randomUUID(),
            amount: amountFactory,
            discount: dto.discount,
            description: dto.description,
            createdAt: new Date(),
        });
    }
}
