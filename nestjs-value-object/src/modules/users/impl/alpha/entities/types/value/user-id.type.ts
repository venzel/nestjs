import { IdError } from '../errors';

export class Id {
    private id: string;

    private constructor(id: string) {
        const isValid = Id.validate(id);

        if (!isValid) {
            throw new IdError(id.toString());
        }

        this.id = id;
    }

    static create(id: string): Id {
        return new Id(id);
    }

    get value(): string {
        return this.id;
    }

    static validate(id: string): boolean {
        if (!id) {
            return false;
        }

        return true;
    }
}
