import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.entity';
import { User } from '../auth/user.entity';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    createComment(createComment: CreateCommentDto, user: User): Promise<Comment>;
}
