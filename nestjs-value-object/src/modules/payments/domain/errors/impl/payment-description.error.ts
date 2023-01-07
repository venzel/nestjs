export class DescriptionError extends Error {
    readonly value: string = 'DescriptionError';

    constructor(description: string) {
        super(`Description ${description} invalid!`);
    }
}
