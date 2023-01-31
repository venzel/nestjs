import { Either, left, right } from 'core/helpers/either';
import { AmountError } from '../errors';

export class Amount {
    private constructor(private readonly amount: number) {
        Object.freeze(this);
    }

    static create(amount: number): Either<AmountError, Amount> {
        if (!this.validate(amount)) {
            return left(new AmountError(amount));
        }

        return right(new Amount(amount));
    }

    get value(): number {
        return this.amount;
    }

    static validate(amount: number): boolean {
        if (!amount) return false;

        if (amount < 1 || amount > 10000) return false;

        return true;
    }
}
