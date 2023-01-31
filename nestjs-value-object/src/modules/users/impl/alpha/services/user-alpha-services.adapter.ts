import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'modules/users/interfaces/dtos';
import { CreateUserAlphaService } from './create-user-alpha.service';
import { FindOneUserAlphaService } from './find-one-user-alpha.service';
import { ListUsersAlphaService } from './list-users-alpha.service';

@Injectable()
export class UserAlphaServicesAdapter {
    constructor(
        private readonly createUserService: CreateUserAlphaService,
        private readonly findOneUserService: FindOneUserAlphaService,
        private readonly listUsersService: ListUsersAlphaService,
    ) {}

    create(createUserDto: CreateUserDto) {
        return this.createUserService.execute(createUserDto);
    }

    findOne(id: string) {
        return this.findOneUserService.execute(id);
    }

    list() {
        return this.listUsersService.execute();
    }
}
