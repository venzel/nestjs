import { UnprocessableEntityException } from '@nestjs/common';

export class AgeError extends UnprocessableEntityException {
    readonly value: string = 'AgeError';

    constructor(age: Number) {
        super(`Age ${age} invalid!`);
    }
}
