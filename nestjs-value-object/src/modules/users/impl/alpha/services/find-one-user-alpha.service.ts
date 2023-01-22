import { Injectable } from '@nestjs/common';
import { ResponseUserDto } from 'src/modules/users/interfaces/dtos';
import { UserAlphaBaseService } from './user-alpha-base.service';

@Injectable()
export class FindOneUserAlphaService extends UserAlphaBaseService {
    async execute(id: string): Promise<ResponseUserDto> {
        const existsUser = await this.usersRepository.findOneById(id);

        return existsUser;
    }
}
