import { BadRequestException, Inject } from '@nestjs/common';
import { PaymentEntity, PaymentsMapper, PaymentsRepository } from 'src/modules/payments/interfaces';
import { CreatePaymentDto, ResponsePaymentDto } from 'src/modules/payments/interfaces/dtos';

import { Repository } from 'typeorm';

export class PaymentAlphaTypeormRepository implements PaymentsRepository {
    constructor(
        @Inject('PAYMENT_TYPEORM_REPOSITORY')
        private repository: Repository<PaymentEntity>,

        @Inject('PAYMENT_MAPPER')
        private readonly paymentMapper: PaymentsMapper,
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
