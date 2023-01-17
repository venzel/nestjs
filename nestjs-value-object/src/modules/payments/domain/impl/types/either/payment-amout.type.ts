import { Either, left, right } from 'src/core/helpers/either';
import { AmountError } from 'src/modules/payments/errors/payment-errors.barrel';

export class Amount {
    private constructor(private readonly amount: Number) {
        Object.freeze(this);
    }

    static create(amount: Number): Either<AmountError, Amount> {
        if (!this.validate(amount)) {
            return left(new AmountError(amount.toString()));
        }

        return right(new Amount(amount));
    }

    get value(): Number {
        return this.amount;
    }

    static validate(amount: Number): boolean {
        if (!amount) {
            return false;
        }

        if (amount < 1 || amount > 10000) {
            return false;
        }

        return true;
    }
}
