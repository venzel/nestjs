import { UnprocessableEntityException } from '@nestjs/common';

export class CPFError extends UnprocessableEntityException {
    readonly value: string = 'CPFError';

    constructor(cpf: string) {
        super(`CPF ${cpf} invalid!`);
    }
}
