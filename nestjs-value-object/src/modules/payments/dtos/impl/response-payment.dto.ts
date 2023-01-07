export class ResponsePaymentDto {
    private readonly id: string;
    private readonly amount: Number;
    private readonly discount: Number;
    private readonly description: string;
    private readonly createdAt: Date;

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
        return new ResponsePaymentDto(id, amount, discount, description, createdAt);
    }
}
