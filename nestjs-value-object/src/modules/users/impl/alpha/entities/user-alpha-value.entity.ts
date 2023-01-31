import { randomUUID } from 'node:crypto';
import { UserEntity } from 'modules/users/interfaces';
import { CreateUserAlphaDto } from '../dtos';
import { Name, CreatedAt, Age, Id, Email, CPF } from './types/value';

interface UserEntityProps {
    id?: Id;
    name: Name;
    age: Age;
    email: Email;
    cpf: CPF;
    createdAt: CreatedAt;
}

export class UserAlphaValueEntity implements UserEntity {
    constructor(private readonly props: UserEntityProps) {}

    get id(): string {
        return this.props.id.value;
    }

    get name(): string {
        return this.props.name.value;
    }

    get age(): number {
        return this.props.age.value;
    }

    get email(): string {
        return this.props.email.value;
    }

    get cpf(): string {
        return this.props.cpf.value;
    }

    get createdAt(): Date {
        return this.props.createdAt.value;
    }

    static create(dto: CreateUserAlphaDto): UserAlphaValueEntity {
        const factory: UserEntityProps = {
            id: Id.create(dto.id || randomUUID()),
            name: Name.create(dto.name),
            age: Age.create(dto.age),
            email: Email.create(dto.email),
            cpf: CPF.create(dto.cpf),
            createdAt: CreatedAt.create(new Date()),
        };

        return new UserAlphaValueEntity(factory);
    }
}
