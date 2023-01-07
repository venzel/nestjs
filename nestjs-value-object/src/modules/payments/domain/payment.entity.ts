import { CreatePaymentDto } from '../dtos/create-payment.dto';
import { Amount, Description, Discount } from './types/impl/payment-types.barrel';

export interface PaymentEntityParams {
    readonly amount: Amount;
    readonly discount: Discount;
    readonly description: Description;
}

export class PaymentEntity {
    constructor(private readonly params: PaymentEntityParams) {
        Object.freeze(this);
    }

    getAmount(): Number {
        return this.params.amount.value;
    }

    getDiscount(): Number {
        return this.params.discount.value;
    }

    getDescription(): String {
        return this.params.description.value;
    }

    static create(dto: CreatePaymentDto): Error | PaymentEntity {
        let { amount, discount, description } = dto;

        const AmountOrError = Amount.create(amount);
        const DiscountOrError = Discount.create(discount);
        const DescriptionOrError = Description.create(description);

        return new Error();
    }
}
