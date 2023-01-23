import { CPFError } from '../errors/user-cpf.error';

export class CPF {
    private cpf: string;

    private constructor(cpf: string) {
        const isValid = CPF.validate(cpf);

        if (!isValid) throw new CPFError(cpf);

        this.cpf = cpf;
    }

    static create(cpf: string): CPF {
        return new CPF(cpf);
    }

    get value(): string {
        return this.cpf;
    }

    static validate(cpf: string): boolean {
        if (!cpf) return false;

        return true;
    }
}
