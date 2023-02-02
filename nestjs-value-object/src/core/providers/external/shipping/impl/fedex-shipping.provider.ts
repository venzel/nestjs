import { ShippingProvider } from '../shipping.provider';

export class FedexShippingProvider implements ShippingProvider {
    async getRate(): Promise<number> {
        return 20;
    }
}
