import { Either, left, right } from 'src/core/utils/either';
import { DescriptionError } from '../../../../errors/impl/payment-description.error';

export class Description {
    private constructor(private readonly description: string) {
        Object.freeze(this);
    }

    static create(description: string): Either<DescriptionError, Description> {
        if (!this.validate(description)) {
            return left(new DescriptionError(`Description ${description} invalid!`));
        }

        return right(new Description(description));
    }

    get value(): string {
        return this.description;
    }

    static validate(description: string): boolean {
        if (!description) {
            return false;
        }

        if (description.length < 10 || description.length > 255) {
            return false;
        }

        return true;
    }
}