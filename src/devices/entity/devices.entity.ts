import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Devices {
  @PrimaryColumn()
  serial: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  alias: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  model: string;

  @Column({ type: 'int', nullable: false })
  code: number;

  @CreateDateColumn({ type: 'datetime' })
  created: Date;
}
