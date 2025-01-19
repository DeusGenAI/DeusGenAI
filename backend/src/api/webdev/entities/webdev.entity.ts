import { Entity, Column } from 'typeorm';

import { BaseEntity } from '../../../common/base-entity/base-entity-mysql';

@Entity()
export class Webdev extends BaseEntity {
  @Column({ type: 'json' })
  data: any;
}
