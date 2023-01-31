import { Either, left, right } from 'core/helpers/either';
import { AgeError } from '../errors';

export class Age {
    private constructor(private readonly age: number) {
        Object.freeze(this);
    }

    static create(age: number): Either<AgeError, Age> {
        if (!this.validate(age)) {
            return left(new AgeError(age));
        }

        return right(new Age(age));
    }

    get value(): number {
        return this.age;
    }

    static validate(age: number): boolean {
        const pattern = /^\d+$/;

        if (!age) return false;

        if (typeof age !== 'number') return false;

        if (!pattern.test(age?.toString())) return false;

        return true;
    }
}
