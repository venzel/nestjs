import { Either, left, right } from 'core/helpers/either';
import { EmailError } from '../errors/user-email.error';

export class Email {
    private constructor(private readonly email: string) {
        Object.freeze(this);
    }

    static create(email: string): Either<EmailError, Email> {
        if (!this.validate(email)) {
            return left(new EmailError(email));
        }

        return right(new Email(email));
    }

    get value(): string {
        return this.email;
    }

    static validate(email: string): boolean {
        if (!email) return false;

        return true;
    }
}
