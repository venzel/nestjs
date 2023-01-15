import { UnprocessableEntityException } from '@nestjs/common';

export class DiscountError extends UnprocessableEntityException {
    readonly value: string = 'DiscountError';

    constructor(discount: string) {
        super(`Discount ${discount} invalid!`);
    }
}
