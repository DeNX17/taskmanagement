import { BaseEntity } from "typeorm";
import { Task } from "../tasks/task.entity";
import { Comment } from "../comment/comment.entity";
export declare class User extends BaseEntity {
    id: string;
    username: string;
    password: string;
    salt: string;
    created_at: string;
    tokenVK: string;
    tasks: Task[];
    comments: Comment[];
    validatePassword(password: string): Promise<boolean>;
}
