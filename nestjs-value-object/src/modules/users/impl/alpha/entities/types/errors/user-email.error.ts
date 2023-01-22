import { UnprocessableEntityException } from '@nestjs/common';

export class EmailError extends UnprocessableEntityException {
    readonly value: string = 'EmailError';

    constructor(email: string) {
        super(`Email ${email} invalid!`);
    }
}
