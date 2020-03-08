import { Repository, EntityRepository } from "typeorm";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { Comment } from "./comment.entity";
import { Task } from "../tasks/task.entity";
import { User } from "../auth/user.entity";
import { InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  async createComment(createComment: CreateCommentDto, user: User): Promise<Comment> {
    const { taskId, text } = createComment

    const comment = this.create()
    console.log(user)
    const task = await Task.findOne(taskId)

    const nowDate = new Date()

    comment.text = text
    comment.author = user
    comment.created_at = nowDate.toISOString()
    comment.task = task

    try {
      comment.save()
      return comment

    } catch {
      throw new InternalServerErrorException()
    }
  }
}
