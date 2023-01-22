import { NameError } from '../errors';

export class Name {
    private name: string;

    private constructor(name: string) {
        const isValid = Name.validate(name);

        if (!isValid) {
            throw new NameError(name);
        }

        this.name = name;
    }

    static create(name: string): Name {
        return new Name(name);
    }

    get value(): string {
        return this.name;
    }

    static validate(name: string): boolean {
        if (!name) {
            return false;
        }

        return true;
    }
}
