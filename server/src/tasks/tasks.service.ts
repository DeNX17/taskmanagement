import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { FilterTaskDto } from './dto/filter-task.dto';
import { RateTaskDto } from './dto/rate-task.dto';
import { LabelsRepository } from '../labels/labels.repository';
import { User } from '../auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    private taskRepository: TaskRepository,
    private labelRepository: LabelsRepository
  ) { }


  getTasks(filterDto: FilterTaskDto): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto)
  }

  async getTaskById(id: number): Promise<Task> {
    return this.taskRepository.getTaskById(id)
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { labelIds } = createTaskDto

    const labels = labelIds && labelIds.length > 0
      && await this.labelRepository.getAllLabels({ ids: labelIds })

    return this.taskRepository.createTask(createTaskDto, labels, user)
  }

  async deleteTask(id: number): Promise<boolean> {
    return this.taskRepository.deleteTask(id)
  }

  async updateStatus(id: number, status: TaskStatus): Promise<Task> {
    return this.taskRepository.updateStatus(id, status)
  }

  async rateTask(rateTask: RateTaskDto): Promise<Task> {
    return this.taskRepository.rateTask(rateTask)
  }
}
