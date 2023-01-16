import { DiscountError } from 'src/modules/payments/errors/payment-errors.barrel';

export class Discount {
    private discount: Number;

    private constructor(discount: Number) {
        const isValid = Discount.validate(discount);

        if (!isValid) {
            throw new DiscountError(discount.toString());
        }

        this.discount = discount;
    }

    static create(discount: Number): Discount {
        return new Discount(discount);
    }

    get value(): Number {
        return this.discount;
    }

    static validate(discount: Number): boolean {
        if (!discount) {
            return false;
        }

        if (discount < 5 || discount > 10) {
            return false;
        }

        return true;
    }
}
