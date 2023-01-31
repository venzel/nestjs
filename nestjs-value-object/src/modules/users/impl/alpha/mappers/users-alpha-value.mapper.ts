import { UsersMapper } from 'modules/users/interfaces';
import { CreateUserDto, ResponseUserDto } from 'modules/users/interfaces/dtos';
import { ResponseUserAlphaDto } from '../dtos';
import { UserAlphaValueEntity } from '../entities/user-alpha-value.entity';

export class UsersAlphaValueMapper implements UsersMapper {
    toEntity(createUserDto: CreateUserDto): UserAlphaValueEntity {
        return UserAlphaValueEntity.create(createUserDto);
    }

    toDto(user: UserAlphaValueEntity): ResponseUserDto {
        const { id, name, age, email, cpf, createdAt } = user;

        return ResponseUserAlphaDto.create(id, name, age, email, cpf, createdAt);
    }

    toListDto(users: UserAlphaValueEntity[]): ResponseUserDto[] {
        return users.map(({ id, name, age, email, cpf, createdAt }) =>
            ResponseUserAlphaDto.create(id, name, age, email, cpf, createdAt),
        );
    }
}
