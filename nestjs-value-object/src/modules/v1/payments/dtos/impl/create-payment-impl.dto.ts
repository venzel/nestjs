import { CreatePaymentDto } from 'src/core/interfaces/payments/dtos';

export class CreatePaymentImplDto implements CreatePaymentDto {
    id?: string;
    amount: Number;
    discount: Number;
    description: string;
}
