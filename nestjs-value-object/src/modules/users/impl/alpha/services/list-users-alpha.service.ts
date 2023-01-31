import { Injectable } from '@nestjs/common';
import { ResponseUserDto } from 'modules/users/interfaces/dtos';
import { UserAlphaBaseService } from './user-alpha-base.service';

@Injectable()
export class ListUsersAlphaService extends UserAlphaBaseService {
    async execute(): Promise<ResponseUserDto[]> {
        return this.usersRepository.list();
    }
}
