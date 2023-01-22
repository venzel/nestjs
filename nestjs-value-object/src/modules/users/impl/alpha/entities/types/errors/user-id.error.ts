import { UnprocessableEntityException } from '@nestjs/common';

export class IdError extends UnprocessableEntityException {
    readonly value: string = 'IdError';

    constructor(id: string) {
        super(`Id ${id} invalid!`);
    }
}
