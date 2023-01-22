import { AmountError } from '../errors';

export class Amount {
    private amount: Number;

    private constructor(amount: Number) {
        const isValid = Amount.validate(amount);

        if (!isValid) {
            throw new AmountError(amount.toString());
        }

        this.amount = amount;
    }

    static create(amount: Number): Amount {
        return new Amount(amount);
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
