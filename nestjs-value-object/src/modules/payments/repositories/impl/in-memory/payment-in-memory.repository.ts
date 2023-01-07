import { Injectable } from '@nestjs/common';
import { PaymentInMemoryEntity } from 'src/modules/payments/domain/impl/in-memory/payment-in-memory.entity';
import { PaymentEntity } from 'src/modules/payments/domain/payment.entity';
import {
    CreatePaymentDto,
    ResponsePaymentDto,
} from 'src/modules/payments/dtos/payment-dtos.barrel';
import { PaymentInMemoryMapper } from 'src/modules/payments/mapers/impl/in-memory/payment-in-memory.mapper';
import { PaymentMapper } from 'src/modules/payments/mapers/payment.mapper';
import { PaymentRepository } from '../../payment.repository';

@Injectable()
export class PaymentInMemoryRepository implements PaymentRepository {
    private readonly paymentRepository: PaymentEntity[];
    private readonly paymentMapper: PaymentMapper;

    constructor() {
        this.paymentRepository = new Array<PaymentInMemoryEntity>();
        this.paymentMapper = new PaymentInMemoryMapper();
    }

    async create(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const payment = PaymentInMemoryEntity.create(createPaymentDto);

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
