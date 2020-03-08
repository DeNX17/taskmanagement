import { BaseEntity } from "typeorm";
import { TaskStatus } from "./task-status.enum";
import { Comment } from "../comment/comment.entity";
import { Label } from "../labels/label.entity";
import { User } from "../auth/user.entity";
export declare class Task extends BaseEntity {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    rating: number;
    created_at: string;
    comments: Comment[];
    labels: Label[];
    author: User;
}
