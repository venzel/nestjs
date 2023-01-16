import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { datasourceProvider } from 'src/core/providers/internals/datasource-internal.provider';
import { DataSource } from 'typeorm';
import { UserIdCheckMiddleware } from './../../core/middlewares/user-id-check.middleware';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentTypeormEntity } from './infra/typeorm/entities/payment-typeorm.entity';
import { PaymentTypeormRepository } from './infra/typeorm/repositories/payment-typeorm.repository';
import { PaymentEitherMapper } from './mappers/impl/payment-either.mapper';
import { PaymentServicesAdapter } from './services/payment-services.adapter';
import {
    CreatePaymentService,
    FindOnePaymentService,
    ListPaymentsService,
} from './services/payment-services.barrel';

@Module({
    controllers: [PaymentsController],
    exports: [...datasourceProvider],
    providers: [
        ...datasourceProvider,
        PaymentServicesAdapter,
        FindOnePaymentService,
        CreatePaymentService,
        ListPaymentsService,
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
            useClass: PaymentEitherMapper,
        },
    ],
})
export class PaymentsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: 'payments/:id',
            method: RequestMethod.ALL,
        });
    }
}
