export interface ResponsePaymentDto {
    readonly id: string;
    readonly amount: Number;
    readonly discount: Number;
    readonly description: string;
    readonly createdAt: Date;
}
