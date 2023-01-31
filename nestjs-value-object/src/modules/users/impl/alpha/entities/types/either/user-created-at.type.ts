import { Either, left, right } from 'core/helpers/either';
import { CreatedAtError } from '../errors';

export class CreatedAt {
    private constructor(private readonly createdAt: Date) {
        Object.freeze(this);
    }

    static create(createdAt: Date): Either<CreatedAtError, CreatedAt> {
        if (!this.valcreatedAtate(createdAt)) {
            return left(new CreatedAtError(createdAt));
        }

        return right(new CreatedAt(createdAt));
    }

    get value(): Date {
        return this.createdAt;
    }

    static valcreatedAtate(createdAt: Date): boolean {
        if (!createdAt) return false;

        return true;
    }
}
