import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ShippingProvider } from '../shipping.provider';

export class SedexShippingProvider implements ShippingProvider {
    private readonly baseUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.baseUrl = this.configService.get<string>('PAYPAL_BASE_URL');
    }

    async getRate(): Promise<number> {
        try {
            const data = await this.httpService.axiosRef.get(
                'https://api.coindesk.com/v1/bpi/currentprice.json',
            );

            return 10;
        } catch (err) {}
    }
}
