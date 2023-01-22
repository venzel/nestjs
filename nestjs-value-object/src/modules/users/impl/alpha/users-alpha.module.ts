import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserIdCheckMiddleware } from 'src/core/middlewares/user-id-check.middleware';
import { datasourceProvider } from 'src/core/providers/internals/datasource-internal.provider';
import { DataSource } from 'typeorm';
import { UsersAlphaController } from './controllers/users-alpha.controller';
import { UserAlphaTypeormEntity } from './infra/typeorm/entities/user-alpha-typeorm.entity';
import { UsersAlphaEitherMapper } from './mappers/users-alpha-either.mapper';
import { UsersAlphaMockRepository } from './repositories/users-alpha-mock.repository';
import { CreateUserAlphaService, FindOneUserAlphaService, ListUsersAlphaService } from './services';
import { UserAlphaServicesAdapter } from './services/user-alpha-services.adapter';

@Module({
    controllers: [UsersAlphaController],
    exports: [...datasourceProvider],
    providers: [
        ...datasourceProvider,
        UserAlphaServicesAdapter,
        FindOneUserAlphaService,
        CreateUserAlphaService,
        ListUsersAlphaService,
        {
            provide: 'USER_TYPEORM_REPOSITORY',
            useFactory: (dataSource: DataSource) =>
                dataSource.getRepository(UserAlphaTypeormEntity),
            inject: ['TYPEORM_CONNECTION'],
        },
        {
            provide: 'USER_REPOSITORY',
            useClass: UsersAlphaMockRepository,
        },
        {
            provide: 'USER_MAPPER',
            useClass: UsersAlphaEitherMapper,
        },
    ],
})
export class UsersAlphaModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: 'users/:id',
            method: RequestMethod.ALL,
        });
    }
}
