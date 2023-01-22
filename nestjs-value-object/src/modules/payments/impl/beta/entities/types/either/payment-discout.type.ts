import { Either, left, right } from 'src/core/helpers/either';
import { DiscountError } from '../errors';

export class Discount {
    private constructor(private readonly discount: Number) {
        Object.freeze(this);
    }

    static create(discount: Number): Either<DiscountError, Discount> {
        if (!this.validate(discount)) {
            return left(new DiscountError(discount));
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
