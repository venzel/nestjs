import { CreatedAtError } from './../../errors/impl/payment-created-at.error';
import { randomUUID } from 'node:crypto';
import { Either, left, right } from 'src/core/utils/either';
import { CreatePaymentDto } from '../../../dtos/impl/create-payment.dto';
import {
    AmountError,
    DescriptionError,
    DiscountError,
    IdError,
} from '../../errors/payment-errors.barrel';
import { PaymentEntity } from '../../payment.entity';
import { Amount, Description, Discount, Id, CreatedAt } from './types/payment-types.barrel';

export interface PaymentEntityProps {
    readonly id: Id;
    readonly amount: Amount;
    readonly discount: Discount;
    readonly description: Description;
    readonly createdAt: CreatedAt;
}

export type PaymentEntityError =
    | IdError
    | AmountError
    | DiscountError
    | DescriptionError
    | CreatedAtError;

export class PaymentEitherEntity implements PaymentEntity {
    constructor(private readonly props: PaymentEntityProps) {
        Object.freeze(this);
    }

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

    static create(dto: CreatePaymentDto): Either<PaymentEntityError, PaymentEitherEntity> {
        let { amount, discount, description } = dto;

        const id = randomUUID();
        const createdAt = new Date();

        const mapFactory = {
            id: {
                of: Id.create(id),
                error: new IdError(id),
            },
            amount: {
                of: Amount.create(amount),
                error: new AmountError(amount.toString()),
            },
            discount: {
                of: Discount.create(discount),
                error: new DiscountError(discount.toString()),
            },
            description: {
                of: Description.create(description),
                error: new DescriptionError(description.toString()),
            },
            createdAt: {
                of: CreatedAt.create(createdAt),
                error: new CreatedAtError(createdAt.toString()),
            },
        };

        for (const { of, error } of Object.values(mapFactory)) {
            if (of.isLeft()) {
                return left(error);
            }
        }

        const data = Object.entries(mapFactory).map(([key, value]) => {
            return {
                [key]: value.of.value,
            };
        }) as undefined as PaymentEntityProps;

        return right(new PaymentEitherEntity(data));
    }
}
