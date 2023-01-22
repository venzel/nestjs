import { Either, left, right } from 'src/core/helpers/either';
import { AgeError } from '../errors';

export class Age {
    private constructor(private readonly age: Number) {
        Object.freeze(this);
    }

    static create(age: Number): Either<AgeError, Age> {
        if (!this.valageate(age)) {
            return left(new AgeError(age));
        }

        return right(new Age(age));
    }

    get value(): Number {
        return this.age;
    }

    static valageate(age: Number): boolean {
        if (!age) {
            return false;
        }

        return true;
    }
}
