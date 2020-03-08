import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { Task } from "../tasks/task.entity";
import { hash } from "bcryptjs"
import { Comment } from "../comment/comment.entity"

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string

  @Column()
  created_at: string

  @Column({ nullable: true })
  tokenVK: string

  @OneToMany(type => Task, task => task.author)
  tasks: Task[]

  @OneToMany(type => Comment, comment => comment.author)
  comments: Comment[]

  async validatePassword(password: string): Promise<boolean> {
    return await hash(password, this.salt) === this.password
  }
}