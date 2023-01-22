import { ResponseUserDto } from 'src/modules/users/interfaces/dtos';

export class ResponseUserAlphaDto implements ResponseUserDto {
    readonly id: string;
    readonly name: string;
    readonly age: number;
    readonly email: string;
    readonly cpf: string;
    readonly createdAt: Date;

    private constructor(
        id: string,
        name: string,
        age: number,
        email: string,
        cpf: string,
        createdAt: Date,
    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.cpf = cpf;
        this.createdAt = createdAt;
    }

    static create(
        id: string,
        name: string,
        age: number,
        email: string,
        cpf: string,
        createdAt: Date,
    ) {
        return new ResponseUserAlphaDto(id, name, age, email, cpf, createdAt);
    }
}
