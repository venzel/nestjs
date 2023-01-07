export class AmountError extends Error {
    readonly value: string = 'AmountError';

    constructor(amount: string) {
        super(`Amount ${amount} invalid!`);
    }
}
