import { UnprocessableEntityException } from '@nestjs/common';

export class AgeError extends UnprocessableEntityException {
    readonly value: string = 'AgeError';

    constructor(age: number) {
        super(`Age ${age} invalid!`);
    }
}
