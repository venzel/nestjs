import { UnprocessableEntityException } from '@nestjs/common';

export class DiscountError extends UnprocessableEntityException {
    readonly value: string = 'DiscountError';

    constructor(discount: Number) {
        super(`Discount ${discount} invalid!`);
    }
}
