import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { FilterTaskDto } from './dto/filter-task.dto';
import { RateTaskDto } from './dto/rate-task.dto';
import { LabelsRepository } from '../labels/labels.repository';
import { User } from '../auth/user.entity';
export declare class TasksService {
    private taskRepository;
    private labelRepository;
    constructor(taskRepository: TaskRepository, labelRepository: LabelsRepository);
    getTasks(filterDto: FilterTaskDto): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    deleteTask(id: number): Promise<boolean>;
    updateStatus(id: number, status: TaskStatus): Promise<Task>;
    rateTask(rateTask: RateTaskDto): Promise<Task>;
    statusTransferToProgress(): Promise<void>;
}
