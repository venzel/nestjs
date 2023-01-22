import { Injectable } from '@nestjs/common';
import { CreateUserDto, ResponseUserDto } from 'src/modules/users/interfaces/dtos';
import { UserAlphaBaseService } from './user-alpha-base.service';

@Injectable()
export class CreateUserAlphaService extends UserAlphaBaseService {
    async execute(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
        const user = this.usersRepository.create(createUserDto);

        return user;
    }
}
