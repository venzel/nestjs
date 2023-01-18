import { ConflictException, Inject } from '@nestjs/common';
import { PaymentEntity, PaymentsMapper, PaymentsRepository } from 'src/core/interfaces/payments';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/core/interfaces/payments/dtos';

export class PaymentsFakeRepository implements PaymentsRepository {
    private readonly paymentRepository: PaymentEntity[] = [];

    constructor(@Inject('PAYMENT_MAPPER') private readonly paymentMapper: PaymentsMapper) {}

    async create(dto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const { id } = dto;

        if (id) {
            const existsPayment = await this.findOneById(id);

            if (existsPayment) {
                throw new ConflictException(`Id ${id} already exists!`);
            }

            dto.id = id;
        }

        const payment = this.paymentMapper.toEntity(dto);

        this.paymentRepository.push(payment);

        return this.paymentMapper.toDto(payment);
    }

    async findOneById(paymentId: string): Promise<ResponsePaymentDto | undefined> {
        const existsPayment = this.paymentRepository.find(({ id }) => id === paymentId);

        return existsPayment ? this.paymentMapper.toDto(existsPayment) : undefined;
    }

    async list(): Promise<ResponsePaymentDto[]> {
        return this.paymentMapper.toListDto(this.paymentRepository);
    }
}
