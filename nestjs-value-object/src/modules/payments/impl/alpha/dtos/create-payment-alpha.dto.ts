import { CreatePaymentDto } from 'src/modules/payments/interfaces/dtos';

export class CreatePaymentAlphaDto implements CreatePaymentDto {
    id?: string;
    amount: Number;
    discount: Number;
    description: string;
}
