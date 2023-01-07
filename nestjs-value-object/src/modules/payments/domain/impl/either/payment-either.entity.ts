import { randomUUID } from 'node:crypto';
import { Either, left, right } from 'src/core/utils/either';
import { CreatePaymentDto } from '../../../dtos/impl/create-payment.dto';
import { AmountError, DescriptionError, DiscountError } from '../../errors/payment-errors.barrel';
import { PaymentEntity } from '../../payment.entity';
import { Amount, Description, Discount } from './types/payment-types.barrel';

export interface PaymentEntityProps {
    readonly id: string;
    readonly amount: Amount;
    readonly discount: Discount;
    readonly description: Description;
    readonly createdAt: Date;
}

export class PaymentEitherEntity implements PaymentEntity {
    constructor(private readonly props: PaymentEntityProps) {
        Object.freeze(this);
    }

    get id(): string {
        return this.props.id;
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
        return this.props.createdAt;
    }

    static create(
        createPaymentDto: CreatePaymentDto,
    ): Either<AmountError | DiscountError | DescriptionError, PaymentEitherEntity> {
        let { amount, discount, description } = createPaymentDto;

        const AmountOrError = Amount.create(amount);
        const DiscountOrError = Discount.create(discount);
        const DescriptionOrError = Description.create(description);

        if (AmountOrError.isLeft()) {
            return left(new AmountError(amount.toString()));
        }

        if (DiscountOrError.isLeft()) {
            return left(new DiscountError(discount.toString()));
        }

        if (DescriptionOrError.isLeft()) {
            return left(new DescriptionError(description));
        }

        return right(
            new PaymentEitherEntity({
                id: randomUUID(),
                amount: AmountOrError.value,
                discount: DiscountOrError.value,
                description: DescriptionOrError.value,
                createdAt: new Date(),
            }),
        );
    }
}
