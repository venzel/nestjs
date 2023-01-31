import { CreateUserDto } from 'modules/users/interfaces/dtos';

export class CreateUserAlphaDto implements CreateUserDto {
    id?: string;
    name: string;
    age: number;
    email: string;
    cpf: string;
}
