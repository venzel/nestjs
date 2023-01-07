export class IdError extends Error {
    readonly value: string = 'IdError';

    constructor(id: string) {
        super(`Id ${id} invalid!`);
    }
}
