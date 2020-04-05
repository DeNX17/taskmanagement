import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthGuardJWT } from '../constants/constants';
import { CurrentUser } from '../auth/user-decorator';
import { User } from '../auth/user.entity';

@Controller('api/comment')
export class CommentController {
  constructor(private commentService: CommentService) { }

  @UseGuards(AuthGuard(AuthGuardJWT))
  @Post('/create')
  createComment(@Body() createComment: CreateCommentDto, @CurrentUser() user: User): Promise<Comment> {
    return this.commentService.createComment(createComment, user)
  }
}
