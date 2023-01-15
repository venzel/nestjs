import { ForbiddenException } from '@nestjs/common';

export class AmountError extends ForbiddenException {
    readonly value: string = 'AmountError';

    constructor(amount: string) {
        super(`Amount ${amount} invalid!`);
    }
}
