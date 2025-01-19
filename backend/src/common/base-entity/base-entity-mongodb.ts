import { ObjectIdColumn, ObjectId, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

export class BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Index()
  @CreateDateColumn()
  createdAt: Date;

  @Index()
  @UpdateDateColumn()
  updatedAt: Date;
}
