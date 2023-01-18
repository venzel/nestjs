import { ResponsePaymentDto } from 'src/core/interfaces/payments/dtos';

export class ResponsePaymentImplDto implements ResponsePaymentDto {
    readonly id: string;
    readonly amount: Number;
    readonly discount: Number;
    readonly description: string;
    readonly createdAt: Date;

    private constructor(
        id: string,
        amount: Number,
        discount: Number,
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
        amount: Number,
        discount: Number,
        description: string,
        createdAt: Date,
    ) {
        return new ResponsePaymentImplDto(id, amount, discount, description, createdAt);
    }
}
