import { CreatePaymentDto } from 'src/modules/payments/interfaces/dtos';

export class CreatePaymentAlphaDto implements CreatePaymentDto {
    id?: string;
    amount: number;
    discount: number;
    description: string;
}
