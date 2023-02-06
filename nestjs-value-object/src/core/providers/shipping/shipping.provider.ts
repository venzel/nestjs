export interface ShippingProvider {
    getRate(): Promise<number>;
}
