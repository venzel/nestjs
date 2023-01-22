import { Either, left, right } from 'src/core/helpers/either';
import { CPFError } from '../errors/user-cpf.error';

export class CPF {
    private constructor(private readonly cpf: string) {
        Object.freeze(this);
    }

    static create(cpf: string): Either<CPFError, CPF> {
        if (!this.valcpfate(cpf)) {
            return left(new CPFError(cpf));
        }

        return right(new CPF(cpf));
    }

    get value(): string {
        return this.cpf;
    }

    static valcpfate(cpf: string): boolean {
        if (!cpf) {
            return false;
        }

        return true;
    }
}
