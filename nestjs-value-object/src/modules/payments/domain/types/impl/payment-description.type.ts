export class Description {
    private constructor(private readonly description: String) {
        Object.freeze(this);
    }

    static create(description: String): Error | Description {
        if (!this.validate(description)) {
            return new Error('Description invalid!');
        }

        return new this(description);
    }

    get value(): String {
        return this.description;
    }

    static validate(description: String): boolean {
        if (!description) {
            return false;
        }

        if (description.length < 10 || description.length > 255) {
            return false;
        }

        return true;
    }
}
