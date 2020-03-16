import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";
import { FilterTaskDto } from "./dto/filter-task.dto";
import { Label } from "../labels/label.entity";
import { NotFoundException } from "@nestjs/common";
import { RateTaskDto } from "./dto/rate-task.dto";
import { User } from "../auth/user.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto, labels: Label[], user: User): Promise<Task> {
    const { title, description } = createTaskDto

    const date = new Date()

    const task = this.create()

    task.title = title
    task.description = description
    task.status = TaskStatus.OPEN
    task.rating = 0
    task.created_at = date.toISOString()
    task.author = user
    task.labels = labels
    await task.save()

    return task
  }

  async getTasks(filterDto: FilterTaskDto): Promise<Task[]> {
    const { search } = filterDto
    const query = this.createQueryBuilder('task')
      .orderBy("task.id")
      .leftJoinAndSelect("task.comments", "comment")
      .leftJoinAndSelect("task.labels", "label")
      .leftJoinAndSelect("task.author", "user")

    if (search) {
      query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search: `%${search}%` })
    }

    const tasks = await query.getMany()
    return tasks
  }

  async getTaskById(id: number): Promise<Task> {
    const found = await this.findOne(id);

    if (!found) {
      throw new NotFoundException("not found task")
    }

    return found
  }

  async rateTask(rateTask: RateTaskDto): Promise<Task> {
    const { taskId, rating } = rateTask

    const task = await this.findOne(taskId)

    task.rating = rating
    task.save()

    return task
  }

  async deleteTask(id: number): Promise<boolean> {
    const task = await this.findOne(id)

    if (!task) {
      throw new NotFoundException("Not found")
    }

    await this.remove(task)
    return true
  }

  async updateStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id)
    task.status = status;

    await task.save()
    return task
  }

  async statusTransferToProgress(): Promise<void> {
    const query = this.createQueryBuilder("task").update(Task).set({
      status: TaskStatus.IN_PROGRESS
    }).where("status = :status", { status: TaskStatus.OPEN })

    query.execute()
  }
}
