import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { PaymentEntity } from '../../../domain/payment.entity';

@Entity('payments')
export class PaymentTypeormEntity extends BaseEntity implements PaymentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: Number;

    @Column()
    discount: Number;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;
}
