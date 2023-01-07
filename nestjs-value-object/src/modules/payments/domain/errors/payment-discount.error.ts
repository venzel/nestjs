export class DiscountError extends Error {
    readonly value: string = 'DiscountError';

    constructor(message: string) {
        super(message);
    }
}
