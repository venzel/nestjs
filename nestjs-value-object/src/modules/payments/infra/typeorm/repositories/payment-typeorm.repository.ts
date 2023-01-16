import { BadRequestException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaymentEntity } from '../../../domain/payment.entity';
import { CreatePaymentDto, ResponsePaymentDto } from '../../../dtos/payment-dtos.barrel';
import { PaymentMapper } from '../../../mappers/payment.mapper';
import { PaymentRepository } from '../../../repositories/payment.repository';

export class PaymentTypeormRepository implements PaymentRepository {
    constructor(
        @Inject('PAYMENT_TYPEORM_REPOSITORY')
        private repository: Repository<PaymentEntity>,

        @Inject('PAYMENT_MAPPER')
        private readonly paymentMapper: PaymentMapper,
    ) {}

    async create(dto: CreatePaymentDto): Promise<PaymentEntity> {
        try {
            const payment = this.repository.create(dto);

            await this.repository.save(payment);

            return this.paymentMapper.toDto(payment);
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async findOneById(paymentId: string): Promise<ResponsePaymentDto | undefined> {
        try {
            const existsPayment = await this.repository.findOne({
                where: { id: paymentId },
            });

            return existsPayment ? this.paymentMapper.toDto(existsPayment) : undefined;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async list(): Promise<ResponsePaymentDto[]> {
        try {
            const payments = await this.repository.find();

            return payments.length ? this.paymentMapper.toListDto(payments) : [];
        } catch (error) {
            throw new BadRequestException(error);
        }
    }
}
