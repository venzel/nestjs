import { Either, left, right } from 'src/core/helpers/either';
import { AgeError } from '../errors';

export class Age {
    private constructor(private readonly age: number) {
        Object.freeze(this);
    }

    static create(age: number): Either<AgeError, Age> {
        if (!this.valageate(age)) {
            return left(new AgeError(age));
        }

        return right(new Age(age));
    }

    get value(): number {
        return this.age;
    }

    static valageate(age: number): boolean {
        if (!age) {
            return false;
        }

        return true;
    }
}
