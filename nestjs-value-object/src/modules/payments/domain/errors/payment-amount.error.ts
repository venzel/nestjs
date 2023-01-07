export class AmountError extends Error {
    readonly value: string = 'AmountError';

    constructor(message: string) {
        super(message);
    }
}
