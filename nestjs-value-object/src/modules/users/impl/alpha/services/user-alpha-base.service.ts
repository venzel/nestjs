import { Inject } from '@nestjs/common';
import { UsersRepository } from '../../../interfaces';

export abstract class UserAlphaBaseService {
    constructor(
        @Inject('USER_REPOSITORY')
        protected readonly usersRepository: UsersRepository,
    ) {}
}
