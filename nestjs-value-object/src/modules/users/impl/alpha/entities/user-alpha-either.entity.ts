import { randomUUID } from 'node:crypto';
import { Either, left, right } from 'core/helpers/either';
import { UserEntity } from 'modules/users/interfaces';
import { CreateUserDto } from 'modules/users/interfaces/dtos';
import { Age, Email, CPF, CreatedAt, Id, Name } from './types/either';
import { AgeError, CreatedAtError, IdError, NameError } from './types/errors';
import { CPFError } from './types/errors/user-cpf.error';
import { EmailError } from './types/errors/user-email.error';

export interface UserEntityProps {
    id: Id;
    name: Name;
    age: Age;
    email: Email;
    cpf: CPF;
    createdAt: CreatedAt;
}

export type UserEntityError =
    | IdError
    | NameError
    | AgeError
    | EmailError
    | CPFError
    | CreatedAtError;

export class UserAlphaEitherEntity implements UserEntity {
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

    static create(dto: CreateUserDto): Either<UserEntityError, UserAlphaEitherEntity> {
        const { id, name, age, email, cpf } = dto;

        const uuid = randomUUID(),
            date = new Date();

        const IdOrError = Id.create(id || uuid),
            NameOrError = Name.create(name),
            AgeOrError = Age.create(age),
            EmailOrError = Email.create(email),
            CPFOrError = CPF.create(cpf),
            CreatedAtOrError = CreatedAt.create(date);

        if (IdOrError.isLeft()) return left(new IdError(uuid));
        if (NameOrError.isLeft()) return left(new NameError(name));
        if (AgeOrError.isLeft()) return left(new AgeError(age));
        if (EmailOrError.isLeft()) return left(new EmailError(email));
        if (CPFOrError.isLeft()) return left(new CPFError(cpf));
        if (CreatedAtOrError.isLeft()) return left(new CreatedAtError(date));

        const factory: UserEntityProps = {
            id: IdOrError.value,
            name: NameOrError.value,
            age: AgeOrError.value,
            email: EmailOrError.value,
            cpf: CPFOrError.value,
            createdAt: CreatedAtOrError.value,
        };

        return right(new UserAlphaEitherEntity(factory));
    }
}
