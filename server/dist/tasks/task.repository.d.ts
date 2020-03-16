import { Repository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";
import { FilterTaskDto } from "./dto/filter-task.dto";
import { Label } from "../labels/label.entity";
import { RateTaskDto } from "./dto/rate-task.dto";
import { User } from "../auth/user.entity";
export declare class TaskRepository extends Repository<Task> {
    createTask(createTaskDto: CreateTaskDto, labels: Label[], user: User): Promise<Task>;
    getTasks(filterDto: FilterTaskDto): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    rateTask(rateTask: RateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<boolean>;
    updateStatus(id: number, status: TaskStatus): Promise<Task>;
    statusTransferToProgress(): Promise<void>;
}
