import { UnprocessableEntityException } from '@nestjs/common';

export class CreatedAtError extends UnprocessableEntityException {
    readonly value: string = 'CreatedAtError';

    constructor(createdAt: Date) {
        super(`CreatedAt ${createdAt} invalid!`);
    }
}
