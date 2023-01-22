import { generateId } from 'src/core/helpers/generate-id.helper';
import { UserEntity } from 'src/modules/users/interfaces';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity('users')
export class UserAlphaTypeormEntity extends BaseEntity implements UserEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column({ unique: true })
    email: string;

    @Column()
    cpf: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz', nullable: false })
    createdAt: Date;

    constructor() {
        super();

        if (!this.id) {
            this.id = generateId('HASH');
        }
    }
}
