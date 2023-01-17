import { generateId } from 'src/core/helpers/generate-id.helper';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { PaymentEntity } from '../../../domain/payment.entity';

@Entity('payments')
export class PaymentTypeormEntity extends BaseEntity implements PaymentEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    amount: Number;

    @Column()
    discount: Number;

    @Column()
    description: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz', nullable: false })
    createdAt: Date;

    constructor() {
        super();

        if (!this.id) {
            this.id = generateId('HASH');
        }
    }
}
