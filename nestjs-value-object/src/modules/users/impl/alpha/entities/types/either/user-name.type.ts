import { Either, left, right } from 'core/helpers/either';
import { NameError } from '../errors';

export class Name {
    private constructor(private readonly name: string) {
        Object.freeze(this);
    }

    static create(name: string): Either<NameError, Name> {
        if (!this.validate(name)) {
            return left(new NameError(name));
        }

        return right(new Name(name));
    }

    get value(): string {
        return this.name;
    }

    static validate(name: string): boolean {
        if (!name) return false;

        return true;
    }
}
