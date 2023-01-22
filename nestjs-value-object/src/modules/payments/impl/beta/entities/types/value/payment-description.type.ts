import { DescriptionError } from '../errors';

export class Description {
    private description: string;

    private constructor(description: string) {
        const isValid = Description.validate(description);

        if (!isValid) {
            throw new DescriptionError(description);
        }

        this.description = description;
    }

    static create(description: string): Description {
        return new Description(description);
    }

    get value(): string {
        return this.description;
    }

    static validate(description: string): boolean {
        if (!description) {
            return false;
        }

        return true;
    }
}
