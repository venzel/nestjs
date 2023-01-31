import { BadRequestException, Inject } from '@nestjs/common';
import { UserEntity, UsersMapper, UsersRepository } from 'modules/users/interfaces';
import { CreateUserDto, ResponseUserDto } from 'modules/users/interfaces/dtos';
import { Repository } from 'typeorm';

export class UserAlphaTypeormRepository implements UsersRepository {
    constructor(
        @Inject('USER_TYPEORM_REPOSITORY')
        private repository: Repository<UserEntity>,

        @Inject('USER_MAPPER')
        private readonly mapper: UsersMapper,
    ) {}

    async create(dto: CreateUserDto): Promise<UserEntity> {
        try {
            const user = this.repository.create(dto);

            await this.repository.save(user);

            return this.mapper.toDto(user);
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async findOneById(userId: string): Promise<ResponseUserDto | undefined> {
        try {
            const existsUser = await this.repository.findOne({
                where: { id: userId },
            });

            return existsUser ? this.mapper.toDto(existsUser) : undefined;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async findOneByEmail(email: string): Promise<ResponseUserDto | undefined> {
        try {
            const existsUser = await this.repository.findOne({
                where: { email },
            });

            return existsUser ? this.mapper.toDto(existsUser) : undefined;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async list(): Promise<ResponseUserDto[]> {
        try {
            const users = await this.repository.find();

            return users.length ? this.mapper.toListDto(users) : [];
        } catch (error) {
            throw new BadRequestException(error);
        }
    }
}
