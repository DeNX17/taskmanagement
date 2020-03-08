import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRepository } from './comment.repository';
import { Comment } from "./comment.entity";
import { User } from 'src/auth/user.entity';
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: CommentRepository);
    createComment(createComment: CreateCommentDto, user: User): Promise<Comment>;
}
