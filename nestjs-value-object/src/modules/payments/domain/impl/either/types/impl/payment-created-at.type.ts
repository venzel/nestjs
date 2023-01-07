import { Either, left, right } from 'src/core/utils/either';
import { CreatedAtError } from '../../../../errors/impl/payment-created-at.error';

export class CreatedAt {
    private constructor(private readonly createdAt: Date) {
        Object.freeze(this);
    }

    static create(createdAt: Date): Either<CreatedAtError, CreatedAt> {
        if (!this.valcreatedAtate(createdAt)) {
            return left(new CreatedAtError(createdAt.toString()));
        }

        return right(new CreatedAt(createdAt));
    }

    get value(): Date {
        return this.createdAt;
    }

    static valcreatedAtate(createdAt: Date): boolean {
        if (!createdAt) {
            return false;
        }

        return true;
    }
}
