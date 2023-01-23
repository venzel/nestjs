import { Either, left, right } from 'src/core/helpers/either';
import { DiscountError } from '../errors';

export class Discount {
    private constructor(private readonly discount: number) {
        Object.freeze(this);
    }

    static create(discount: number): Either<DiscountError, Discount> {
        if (!this.validate(discount)) {
            return left(new DiscountError(discount));
        }

        return right(new Discount(discount));
    }

    get value(): number {
        return this.discount;
    }

    static validate(discount: number): boolean {
        if (!discount) return false;

        if (discount < 1 || discount > 15) return false;

        return true;
    }
}
