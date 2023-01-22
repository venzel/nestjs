import { BadRequestException, Inject } from '@nestjs/common';
import { UserEntity, UsersMapper, UsersRepository } from 'src/modules/users/interfaces';
import { CreateUserDto, ResponseUserDto } from 'src/modules/users/interfaces/dtos';

import { Repository } from 'typeorm';

export class UserAlphaTypeormRepository implements UsersRepository {
    constructor(
        @Inject('USER_TYPEORM_REPOSITORY')
        private repository: Repository<UserEntity>,

        @Inject('USER_MAPPER')
        private readonly userMapper: UsersMapper,
    ) {}

    async create(dto: CreateUserDto): Promise<UserEntity> {
        try {
            const user = this.repository.create(dto);

            await this.repository.save(user);

            return this.userMapper.toDto(user);
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async findOneById(userId: string): Promise<ResponseUserDto | undefined> {
        try {
            const existsUser = await this.repository.findOne({
                where: { id: userId },
            });

            return existsUser ? this.userMapper.toDto(existsUser) : undefined;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async findOneByEmail(email: string): Promise<ResponseUserDto | undefined> {
        try {
            const existsUser = await this.repository.findOne({
                where: { email },
            });

            return existsUser ? this.userMapper.toDto(existsUser) : undefined;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async list(): Promise<ResponseUserDto[]> {
        try {
            const users = await this.repository.find();

            return users.length ? this.userMapper.toListDto(users) : [];
        } catch (error) {
            throw new BadRequestException(error);
        }
    }
}
