import { Either, left, right } from 'core/helpers/either';
import { DescriptionError } from '../errors';

export class Description {
    private constructor(private readonly description: string) {
        Object.freeze(this);
    }

    static create(description: string): Either<DescriptionError, Description> {
        if (!this.validate(description)) {
            return left(new DescriptionError(description));
        }

        return right(new Description(description));
    }

    get value(): string {
        return this.description;
    }

    static validate(description: string): boolean {
        if (!description) return false;

        return true;
    }
}
