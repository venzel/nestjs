import { Inject } from '@nestjs/common';
import { ShippingEnum } from '../shipping.enum';
import { ShippingEstrategy } from '../shipping.estrategy';
import { ShippingProvider } from '../shipping.provider';

export interface ShippigMap {
    [key: string]: ShippingProvider;
}

export class ShippingStrategyImpl implements ShippingEstrategy {
    constructor(
        @Inject('SHIPPING_FEDEX')
        private readonly fedexProvider: ShippingProvider,

        @Inject('SHIPPING_SEDEX')
        private readonly sedexProvider: ShippingProvider,
    ) {}

    getShippingReference(strategy: ShippingEnum): ShippingProvider {
        const map: ShippigMap = {
            FEDEX: this.fedexProvider,
            SEDEX: this.sedexProvider,
        };

        if (!map[strategy]) throw new Error();

        return map[strategy];
    }

    async getRate(strategy: ShippingEnum): Promise<number> {
        const shipping = this.getShippingReference(strategy);

        return await shipping.getRate();
    }
}
