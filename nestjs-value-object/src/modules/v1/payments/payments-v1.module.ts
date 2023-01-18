import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { datasourceProvider } from 'src/core/providers/internals/datasource-internal.provider';
import { DataSource } from 'typeorm';
import { UserIdCheckMiddleware } from 'src/core/middlewares/user-id-check.middleware';
import { PaymentsImplController } from './controllers/payments-impl.controller';
import { PaymentTypeormEntity } from './infra/typeorm/entities/payment-typeorm.entity';
import { PaymentTypeormRepository } from './infra/typeorm/repositories/payment-typeorm.repository';
import { PaymentsEitherMapper } from './mappers/payments-either.mapper';
import {
    CreatePaymentImplService,
    FindOnePaymentImplService,
    ListPaymentsImplService,
} from './services/impl';
import { PaymentServicesAdapter } from './services/payment-services.adapter';

@Module({
    controllers: [PaymentsImplController],
    exports: [...datasourceProvider],
    providers: [
        ...datasourceProvider,
        PaymentServicesAdapter,
        FindOnePaymentImplService,
        CreatePaymentImplService,
        ListPaymentsImplService,
        {
            provide: 'PAYMENT_TYPEORM_REPOSITORY',
            useFactory: (dataSource: DataSource) => dataSource.getRepository(PaymentTypeormEntity),
            inject: ['TYPEORM_CONNECTION'],
        },
        {
            provide: 'PAYMENT_REPOSITORY',
            useClass: PaymentTypeormRepository,
        },
        {
            provide: 'PAYMENT_MAPPER',
            useClass: PaymentsEitherMapper,
        },
    ],
})
export class PaymentsV1Module implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: 'payments/:id',
            method: RequestMethod.ALL,
        });
    }
}
