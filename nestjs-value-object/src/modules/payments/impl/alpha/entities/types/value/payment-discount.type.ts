import { DiscountError } from '../errors';

export class Discount {
    private discount: number;

    private constructor(discount: number) {
        const isValid = Discount.validate(discount);

        if (!isValid) {
            throw new DiscountError(discount);
        }

        this.discount = discount;
    }

    static create(discount: number): Discount {
        return new Discount(discount);
    }

    get value(): number {
        return this.discount;
    }

    static validate(discount: number): boolean {
        if (!discount) {
            return false;
        }

        if (discount < 5 || discount > 10) {
            return false;
        }

        return true;
    }
}
