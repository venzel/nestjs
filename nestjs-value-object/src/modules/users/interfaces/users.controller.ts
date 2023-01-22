import { CreateUserDto, ResponseUserDto } from './dtos';

export interface UsersController {
    create(createUserDto: CreateUserDto): Promise<ResponseUserDto>;

    findOne(id: string): Promise<ResponseUserDto>;

    list(): Promise<ResponseUserDto[]>;
}
