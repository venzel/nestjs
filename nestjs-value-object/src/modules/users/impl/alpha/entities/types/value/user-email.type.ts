import { EmailError } from '../errors/user-email.error';

export class Email {
    private email: string;

    private constructor(email: string) {
        const isValid = Email.validate(email);

        if (!isValid) throw new EmailError(email);

        this.email = email;
    }

    static create(email: string): Email {
        return new Email(email);
    }

    get value(): string {
        return this.email;
    }

    static validate(email: string): boolean {
        if (!email) return false;

        return true;
    }
}
