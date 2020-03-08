import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRepository } from './comment.repository';
import { Comment } from "./comment.entity";
import { User } from 'src/auth/user.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentRepository)
    private commentRepository: CommentRepository
  ) { }

  createComment(createComment: CreateCommentDto, user: User): Promise<Comment> {
    return this.commentRepository.createComment(createComment, user)
  }
}
