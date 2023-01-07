export class DescriptionError extends Error {
    readonly value: string = 'DescriptionError';

    constructor(message: string) {
        super(message);
    }
}
