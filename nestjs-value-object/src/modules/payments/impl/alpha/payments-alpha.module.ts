import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserIdCheckMiddleware } from 'src/core/middlewares/user-id-check.middleware';
import { datasourceProvider } from 'src/core/providers/internals/datasource-internal.provider';
import { DataSource } from 'typeorm';
import { PaymentsAlphaController } from './controllers/payments-alpha.controller';
import { PaymentAlphaTypeormEntity } from './infra/typeorm/entities/payment-alpha-typeorm.entity';
import { PaymentAlphaTypeormRepository } from './infra/typeorm/repositories/payment-alpha-typeorm.repository';
import { PaymentsAlphaEitherMapper } from './mappers/payments-alpha-either.mapper';
import {
    CreatePaymentAlphaService,
    FindOnePaymentAlphaService,
    ListPaymentsAlphaService,
} from './services';
import { PaymentAlphaServicesAdapter } from './services/payment-alpha-services.adapter';

@Module({
    controllers: [PaymentsAlphaController],
    exports: [...datasourceProvider],
    providers: [
        ...datasourceProvider,
        PaymentAlphaServicesAdapter,
        FindOnePaymentAlphaService,
        CreatePaymentAlphaService,
        ListPaymentsAlphaService,
        {
            provide: 'PAYMENT_TYPEORM_REPOSITORY',
            useFactory: (dataSource: DataSource) =>
                dataSource.getRepository(PaymentAlphaTypeormEntity),
            inject: ['TYPEORM_CONNECTION'],
        },
        {
            provide: 'PAYMENT_REPOSITORY',
            useClass: PaymentAlphaTypeormRepository,
        },
        {
            provide: 'PAYMENT_MAPPER',
            useClass: PaymentsAlphaEitherMapper,
        },
    ],
})
export class PaymentsAlphaModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: 'payments/:id',
            method: RequestMethod.ALL,
        });
    }
}
