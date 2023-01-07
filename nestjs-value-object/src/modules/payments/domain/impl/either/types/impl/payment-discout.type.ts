import { Either, left, right } from 'src/core/utils/either';
import { DiscountError } from '../../../../errors/payment-errors.barrel';

export class Discount {
    private constructor(private readonly discount: Number) {
        Object.freeze(this);
    }

    static create(discount: Number): Either<DiscountError, Discount> {
        if (!this.validate(discount)) {
            return left(new DiscountError(`Discount ${discount.toString()} invalid!`));
        }

        return right(new Discount(discount));
    }

    get value(): Number {
        return this.discount;
    }

    static validate(discount: Number): boolean {
        if (!discount) {
            return false;
        }

        if (discount < 1 || discount > 15) {
            return false;
        }

        return true;
    }
}
