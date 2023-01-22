import { randomUUID } from 'node:crypto';
import { Either, left, right } from 'src/core/helpers/either';
import {
    AmountError,
    CreatedAtError,
    DescriptionError,
    DiscountError,
    IdError,
} from './types/errors';
import { Amount, CreatedAt, Description, Discount, Id } from './types/either';
import { PaymentEntity } from 'src/modules/payments/interfaces';
import { CreatePaymentDto } from 'src/modules/payments/interfaces/dtos';

export interface PaymentEntityProps {
    id: Id;
    amount: Amount;
    discount: Discount;
    description: Description;
    createdAt: CreatedAt;
}

export type PaymentEntityError =
    | IdError
    | AmountError
    | DiscountError
    | DescriptionError
    | CreatedAtError;

export class PaymentAlphaEitherEntity implements PaymentEntity {
    constructor(private readonly props: PaymentEntityProps) {}

    get id(): string {
        return this.props.id.value;
    }

    get amount(): Number {
        return this.props.amount.value;
    }

    set amount(value: Number) {
        this.amount = value;
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

    static create(dto: CreatePaymentDto): Either<PaymentEntityError, PaymentAlphaEitherEntity> {
        const { id, amount, discount, description } = dto;

        const uuid = randomUUID(),
            date = new Date();

        const IdOrError = Id.create(id || uuid),
            AmountOrError = Amount.create(amount),
            DiscountOrError = Discount.create(discount),
            DescriptionOrError = Description.create(description),
            CreatedAtOrError = CreatedAt.create(date);

        if (IdOrError.isLeft()) return left(new IdError(uuid));
        if (AmountOrError.isLeft()) return left(new AmountError(amount.toString()));
        if (DiscountOrError.isLeft()) return left(new DiscountError(discount.toString()));
        if (DescriptionOrError.isLeft()) return left(new DescriptionError(description));
        if (CreatedAtOrError.isLeft()) return left(new CreatedAtError(date.toString()));

        const factory: PaymentEntityProps = {
            id: IdOrError.value,
            amount: AmountOrError.value,
            discount: DiscountOrError.value,
            description: DescriptionOrError.value,
            createdAt: CreatedAtOrError.value,
        };

        return right(new PaymentAlphaEitherEntity(factory));
    }
}
