import { AmountError } from '../errors';

export class Amount {
    private amount: number;

    private constructor(amount: number) {
        const isValid = Amount.validate(amount);

        if (!isValid) {
            throw new AmountError(amount);
        }

        this.amount = amount;
    }

    static create(amount: number): Amount {
        return new Amount(amount);
    }

    get value(): number {
        return this.amount;
    }

    static validate(amount: number): boolean {
        if (!amount) {
            return false;
        }

        if (amount < 1 || amount > 10000) {
            return false;
        }

        return true;
    }
}
