import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertRootInUser1691872549729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO public."user"(
            name, email, cpf, type_user, phone, password)
            VALUES ('root', 'root@root.com', '12355584588', 2, '818987333', '$2b$10$oGiIycwLY2IrrbOdx7quYONOjaXO0Q/BpS3LChzp7fzry1ukYSZEC');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DELETE FROM public."user"
                WHERE email like 'root@root.com';
        `);
  }
}
