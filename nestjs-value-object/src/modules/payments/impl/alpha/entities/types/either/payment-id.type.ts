import { Either, left, right } from 'src/core/helpers/either';
import { IdError } from '../errors';

export class Id {
    private constructor(private readonly id: string) {
        Object.freeze(this);
    }

    static create(id: string): Either<IdError, Id> {
        if (!this.validate(id)) {
            return left(new IdError(id.toString()));
        }

        return right(new Id(id));
    }

    get value(): string {
        return this.id;
    }

    static validate(id: string): boolean {
        if (!id) {
            return false;
        }

        return true;
    }
}
