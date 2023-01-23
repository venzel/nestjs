import { ConflictException, Inject } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { UserEntity, UsersMapper, UsersRepository } from 'src/modules/users/interfaces';
import { CreateUserDto, ResponseUserDto } from 'src/modules/users/interfaces/dtos';

export class UsersAlphaMockRepository implements UsersRepository {
    private readonly repository: UserEntity[] = [];

    constructor(@Inject('USER_MAPPER') private readonly mapper: UsersMapper) {}

    async create(dto: CreateUserDto): Promise<ResponseUserDto> {
        const { id } = dto;

        if (!id) {
            dto.id = randomUUID();
        } else {
            const existsUser = await this.findOneById(id);

            if (existsUser) {
                throw new ConflictException(`Id ${id} already exists!`);
            }
        }

        const user = this.mapper.toEntity(dto);

        this.repository.push(user);

        return this.mapper.toDto(user);
    }

    async findOneById(userId: string): Promise<ResponseUserDto | undefined> {
        const existsUser = this.repository.find(({ id }) => id === userId);

        return existsUser ? this.mapper.toDto(existsUser) : undefined;
    }

    async findOneByEmail(userEmail: string): Promise<ResponseUserDto | undefined> {
        const existsUser = this.repository.find(({ email }) => email === userEmail);

        return existsUser ? this.mapper.toDto(existsUser) : undefined;
    }

    async list(): Promise<ResponseUserDto[]> {
        return this.mapper.toListDto(this.repository);
    }
}
