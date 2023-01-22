import { UnprocessableEntityException } from '@nestjs/common';

export class AmountError extends UnprocessableEntityException {
    readonly value: string = 'AmountError';

    constructor(amount: Number) {
        super(`Amount ${amount} invalid!`);
    }
}
