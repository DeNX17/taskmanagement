import { BaseEntity } from "typeorm";
import { Task } from "../tasks/task.entity";
import { User } from "../auth/user.entity";
export declare class Comment extends BaseEntity {
    id: string;
    text: string;
    author: User;
    created_at: string;
    task: Task;
}
