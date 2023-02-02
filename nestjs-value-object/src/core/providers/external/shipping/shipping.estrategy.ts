import { ShippingEnum } from './shipping.enum';
import { ShippingProvider } from './shipping.provider';

export interface ShippingEstrategy {
    getShippingReference(strategy: ShippingEnum): ShippingProvider;

    getRate(strategy: ShippingEnum): Promise<number>;
}
