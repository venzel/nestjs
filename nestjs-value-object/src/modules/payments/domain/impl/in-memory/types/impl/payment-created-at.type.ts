import { CreatedAtError } from '../../../../errors/impl/payment-created-at.error';

export class CreatedAt {
    private createdAt: Date;

    private constructor(createdAt: Date) {
        const isValid = CreatedAt.validate(createdAt);

        if (!isValid) {
            throw new CreatedAtError(createdAt.toString());
        }

        this.createdAt = createdAt;
    }

    static create(createdAt: Date): CreatedAt {
        return new CreatedAt(createdAt);
    }

    get value(): Date {
        return this.createdAt;
    }

    static validate(createdAt: Date): boolean {
        if (!createdAt) {
            return false;
        }

        return true;
    }
}
