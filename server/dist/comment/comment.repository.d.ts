import { Repository } from "typeorm";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { Comment } from "./comment.entity";
import { User } from "../auth/user.entity";
export declare class CommentRepository extends Repository<Comment> {
    createComment(createComment: CreateCommentDto, user: User): Promise<Comment>;
}
