import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { TaskStatus } from "./task-status.enum";
import { Comment } from "../comment/comment.entity"
import { Label } from "../labels/label.entity";
import { User } from "../auth/user.entity";

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus

  @Column()
  rating: number

  @Column({ nullable: true })
  created_at: string

  @OneToMany(type => Comment, comment => comment.task)
  comments: Comment[]

  @ManyToMany(type => Label)
  @JoinTable()
  labels: Label[];

  @ManyToOne(type => User, user => user.tasks)
  author: User
}