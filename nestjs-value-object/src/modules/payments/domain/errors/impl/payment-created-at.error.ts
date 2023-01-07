export class CreatedAtError extends Error {
    readonly value: string = 'CreatedAtError';

    constructor(createdAt: string) {
        super(`CreatedAt ${createdAt} invalid!`);
    }
}
