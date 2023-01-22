import { Module } from '@nestjs/common';
import { PaymentsImplController } from './controllers/payments-impl.controller';

@Module({
    controllers: [PaymentsImplController],
    exports: [],
    providers: [],
})
export class PaymentsV2Module {}
