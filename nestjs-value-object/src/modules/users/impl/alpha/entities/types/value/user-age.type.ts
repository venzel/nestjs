import { AgeError } from '../errors';

export class Age {
    private age: number;

    private constructor(age: number) {
        const isValid = Age.validate(age);

        if (!isValid) {
            throw new AgeError(age);
        }

        this.age = age;
    }

    static create(age: number): Age {
        return new Age(age);
    }

    get value(): number {
        return this.age;
    }

    static validate(age: number): boolean {
        if (!age) {
            return false;
        }

        if (age < 5 || age > 10) {
            return false;
        }

        return true;
    }
}
