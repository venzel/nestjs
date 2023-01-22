import { UnprocessableEntityException } from '@nestjs/common';

export class DescriptionError extends UnprocessableEntityException {
    readonly value: string = 'DescriptionError';

    constructor(description: string) {
        super(`Description ${description} invalid!`);
    }
}
