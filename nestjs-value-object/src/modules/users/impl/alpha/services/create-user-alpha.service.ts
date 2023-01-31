import { HttpStatus, Injectable } from '@nestjs/common';
import { AppException } from 'core/exceptions/app.exception';
import { CreateUserDto, ResponseUserDto } from 'modules/users/interfaces/dtos';
import { UserAlphaBaseService } from './user-alpha-base.service';

@Injectable()
export class CreateUserAlphaService extends UserAlphaBaseService {
    async execute(dto: CreateUserDto): Promise<ResponseUserDto> {
        const existsUser = await this.usersRepository.findOneByEmail(dto.email);

        if (existsUser) {
            const message = `User email ${dto.email} already exists!`;
            throw new AppException(HttpStatus.CONFLICT, message);
        }

        return this.usersRepository.create(dto);
    }
}
