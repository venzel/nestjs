import { UserEntity } from './user.entity';
import { CreateUserDto, ResponseUserDto } from './dtos';

export interface UsersMapper {
    toEntity(createUserDto: CreateUserDto): UserEntity;

    toDto(user: UserEntity): ResponseUserDto;

    toListDto(users: UserEntity[]): ResponseUserDto[];
}
