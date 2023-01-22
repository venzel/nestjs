import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const nameTable = 'payments',
    nameUniqueIdxDescription = 'UQ__PAYMENTS_DESCRIPTION';

const table = new Table({
    name: nameTable,
    columns: [
        { name: 'id', type: 'varchar', isUnique: true, isPrimary: true },
        { name: 'amount', type: 'int' },
        { name: 'discount', type: 'int' },
        { name: 'description', type: 'varchar' },
        { name: 'created_at', type: 'timestamp', isNullable: false, default: 'now()' },
    ],
});

export default class CreatePayments1673912734654Migration implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(table);

        await queryRunner.query(
            `CREATE UNIQUE INDEX "${nameUniqueIdxDescription}" on "${nameTable}" ("description")`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex(nameTable, nameUniqueIdxDescription);

        await queryRunner.dropTable(nameTable);
    }
}
