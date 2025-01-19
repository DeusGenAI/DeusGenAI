import { Entity, Column, Index } from 'typeorm';

import { BaseEntity } from '../../../common/base-entity/base-entity-mongodb';

@Entity()
export class WebdevTemp extends BaseEntity {
  @Index({ unique: true})
  @Column()
  threadId: string;

  @Column('mixed')
  data: any;

  @Column({default: 1})
  talks: number;

  @Column({ default: false})
  published: boolean;
}
