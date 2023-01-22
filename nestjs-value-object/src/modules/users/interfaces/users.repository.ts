import { CreateUserDto, ResponseUserDto } from './dtos';

export interface UsersRepository {
    create(createUserDto: CreateUserDto): Promise<ResponseUserDto>;

    findOneById(userId: string): Promise<ResponseUserDto | undefined>;

    findOneByEmail(email: string): Promise<ResponseUserDto | undefined>;

    list(): Promise<ResponseUserDto[]>;
}
