import { ConflictException, Inject } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PaymentEntity, PaymentsMapper, PaymentsRepository } from 'src/modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';

export class PaymentsAlphaMockRepository implements PaymentsRepository {
    private readonly repository: PaymentEntity[] = [];

    constructor(@Inject('PAYMENT_MAPPER') private readonly mapper: PaymentsMapper) {}

    async create(dto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const { id } = dto;

        if (!id) {
            dto.id = randomUUID();
        } else {
            const existsPayment = await this.findOneById(id);

            if (existsPayment) {
                throw new ConflictException(`Id ${id} already exists!`);
            }
        }

        const payment = this.mapper.toEntity(dto);

        this.repository.push(payment);

        return this.mapper.toDto(payment);
    }

    async findOneById(paymentId: string): Promise<ResponsePaymentDto | undefined> {
        const existsPayment = this.repository.find(({ id }) => id === paymentId);

        return existsPayment ? this.mapper.toDto(existsPayment) : undefined;
    }

    async list(): Promise<ResponsePaymentDto[]> {
        return this.mapper.toListDto(this.repository);
    }
}
