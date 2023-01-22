import { UnprocessableEntityException } from '@nestjs/common';

export class NameError extends UnprocessableEntityException {
    readonly value: string = 'NameError';

    constructor(name: string) {
        super(`Name ${name} invalid!`);
    }
}
