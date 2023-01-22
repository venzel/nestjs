export interface ResponsePaymentDto {
    readonly id: string;
    readonly amount: number;
    readonly discount: number;
    readonly description: string;
    readonly createdAt: Date;
}
