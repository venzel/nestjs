import { Inject } from '@nestjs/common';
import { PaymentEntity } from 'src/modules/payments/domain/payment.entity';
import {
    CreatePaymentDto,
    ResponsePaymentDto,
} from 'src/modules/payments/dtos/payment-dtos.barrel';
import { PaymentMapper } from 'src/modules/payments/mappers/payment.mapper';
import { PaymentRepository } from '../../payment.repository';

export class PaymentInMemoryRepository implements PaymentRepository {
    private readonly paymentRepository: PaymentEntity[] = [];

    constructor(@Inject('PAYMENT_MAPPER') private readonly paymentMapper: PaymentMapper) {}

    async create(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const payment = this.paymentMapper.toEntity(createPaymentDto);

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
