import { UnprocessableEntityException } from '@nestjs/common';
import { UsersMapper } from 'src/modules/users/interfaces';
import { CreateUserDto, ResponseUserDto } from 'src/modules/users/interfaces/dtos';
import { ResponseUserAlphaDto } from '../dtos';
import { UserAlphaEitherEntity } from '../entities/user-alpha-either.entity';

export class UsersAlphaEitherMapper implements UsersMapper {
    toEntity(createUserDto: CreateUserDto): UserAlphaEitherEntity {
        const UserOrError = UserAlphaEitherEntity.create(createUserDto);

        if (UserOrError.isLeft()) throw new UnprocessableEntityException(UserOrError.value.message);

        return UserOrError.value;
    }

    toDto(user: UserAlphaEitherEntity): ResponseUserDto {
        const { id, name, age, email, cpf, createdAt } = user;

        return ResponseUserAlphaDto.create(id, name, age, email, cpf, createdAt);
    }

    toListDto(users: UserAlphaEitherEntity[]): ResponseUserDto[] {
        return users.map(({ id, name, age, email, cpf, createdAt }) =>
            ResponseUserAlphaDto.create(id, name, age, email, cpf, createdAt),
        );
    }
}
