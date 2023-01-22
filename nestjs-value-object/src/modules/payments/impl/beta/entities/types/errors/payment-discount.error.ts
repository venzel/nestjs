import { UnprocessableEntityException } from '@nestjs/common';

export class DiscountError extends UnprocessableEntityException {
    readonly value: string = 'DiscountError';

    constructor(discount: number) {
        super(`Discount ${discount} invalid!`);
    }
}
