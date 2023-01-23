import { AgeError } from '../errors';

export class Age {
    private age: number;

    private constructor(age: number) {
        const isValid = Age.validate(age);

        if (!isValid) throw new AgeError(age);

        this.age = age;
    }

    static create(age: number): Age {
        return new Age(age);
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
