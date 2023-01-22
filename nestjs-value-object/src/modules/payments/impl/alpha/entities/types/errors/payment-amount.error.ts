import { UnprocessableEntityException } from '@nestjs/common';

export class AmountError extends UnprocessableEntityException {
    readonly value: string = 'AmountError';

    constructor(amount: number) {
        super(`Amount ${amount} invalid!`);
    }
}
