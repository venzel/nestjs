export interface PaymentEntity {
    readonly id: string;
    readonly amount: number;
    readonly discount: number;
    readonly description: string;
    readonly createdAt: Date;
}
