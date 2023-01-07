import { AmountError } from '../../errors/payment-amount.error';

export class Amount {
    private constructor(private readonly amount: Number) {
        Object.freeze(this);
    }

    static create(amount: Number): AmountError | Amount {
        if (!this.validate(amount)) {
            return new AmountError('Amount invalid!');
        }

        return new this(amount);
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
