import { ResponsePaymentDto } from 'modules/payments/interfaces/dtos';

export class ResponsePaymentAlphaDto implements ResponsePaymentDto {
    readonly id: string;
    readonly amount: number;
    readonly discount: number;
    readonly description: string;
    readonly createdAt: Date;

    private constructor(
        id: string,
        amount: number,
        discount: number,
        description: string,
        createdAt: Date,
    ) {
        this.id = id;
        this.amount = amount;
        this.discount = discount;
        this.description = description;
        this.createdAt = createdAt;
    }

    static create(
        id: string,
        amount: number,
        discount: number,
        description: string,
        createdAt: Date,
    ) {
        return new ResponsePaymentAlphaDto(id, amount, discount, description, createdAt);
    }
}
