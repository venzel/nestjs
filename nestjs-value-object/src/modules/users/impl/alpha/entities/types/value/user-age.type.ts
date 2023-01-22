import { AgeError } from '../errors';

export class Age {
    private age: Number;

    private constructor(age: Number) {
        const isValid = Age.validate(age);

        if (!isValid) {
            throw new AgeError(age);
        }

        this.age = age;
    }

    static create(age: Number): Age {
        return new Age(age);
    }

    get value(): Number {
        return this.age;
    }

    static validate(age: Number): boolean {
        if (!age) {
            return false;
        }

        if (age < 5 || age > 10) {
            return false;
        }

        return true;
    }
}
