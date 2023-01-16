import { DescriptionError } from 'src/modules/payments/errors/payment-errors.barrel';

export class Description {
    private description: string;

    private constructor(description: string) {
        const isValid = Description.validate(description);

        if (!isValid) {
            throw new DescriptionError(description.toString());
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
