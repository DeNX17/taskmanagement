import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { FilterTaskDto } from './dto/filter-task.dto';
import { RateTaskDto } from './dto/rate-task.dto';
import { User } from '../auth/user.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasksAsync(filterDto: FilterTaskDto): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(user: User, createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<boolean>;
    updateStatus(id: number, status: TaskStatus): Promise<Task>;
    rateTask(rateTask: RateTaskDto): Promise<Task>;
}
