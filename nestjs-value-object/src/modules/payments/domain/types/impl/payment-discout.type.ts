export class Discount {
    private constructor(private readonly discount: Number) {
        Object.freeze(this);
    }

    static create(discount: Number): Error | Discount {
        if (!this.validate(discount)) {
            return new Error('Discount invalid!');
        }

        return new this(discount);
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
