export class DiscountError extends Error {
    readonly value: string = 'DiscountError';

    constructor(discount: string) {
        super(`Discount ${discount} invalid!`);
    }
}
