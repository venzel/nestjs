import { Module } from '@nestjs/common';
import { PaymentsOmegaController } from './controllers/payments-omega.controller';

@Module({
    controllers: [PaymentsOmegaController],
    exports: [],
    providers: [],
})
export class PaymentsOmegaModule {}
