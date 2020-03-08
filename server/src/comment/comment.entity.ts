import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Task } from "../tasks/task.entity";
import { User } from "../auth/user.entity";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  text: string

  @ManyToOne(type => User, user => user.comments)
  author: User

  @Column()
  created_at: string

  @ManyToOne(type => Task, task => task.comments)
  task: Task
}