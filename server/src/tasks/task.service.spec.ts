import { Test } from "@nestjs/testing"
import { TasksService } from "./tasks.service"
import { TaskRepository } from "./task.repository";
import { LabelsRepository } from "../labels/labels.repository";
import { FilterTaskDto } from "./dto/filter-task.dto";
import { Task } from "./task.entity";
import { RateTaskDto } from "./dto/rate-task.dto";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";
import { User } from "../auth/user.entity";


const mockLabelRepository = (): unknown => ({
  getAllLabels: jest.fn(),
})

const mockTaskRepository = (): unknown => ({
  getTasks: jest.fn(),
  getTaskById: jest.fn(),
  rateTask: jest.fn(),
  createTask: jest.fn(),
  deleteTask: jest.fn(),
  updateStatus: jest.fn(),
})

describe('TaskService', () => {
  let tasksService: TasksService;
  let taskRepository
  let labelsRepository

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: LabelsRepository, useFactory: mockLabelRepository },
        { provide: TaskRepository, useFactory: mockTaskRepository }
      ],
    }).compile();

    tasksService = await module.get<TasksService>(TasksService);
    taskRepository = await module.get<TaskRepository>(TaskRepository);
    labelsRepository = await module.get<LabelsRepository>(LabelsRepository);
  });

  describe('getTasks', () => {
    it("gets all task from the repository", async () => {
      taskRepository.getTasks.mockResolvedValue("someValue")
      expect(taskRepository.getTasks).not.toHaveBeenCalled()

      const filters: FilterTaskDto = { search: "some" }

      const result = await tasksService.getTasks(filters)

      expect(taskRepository.getTasks).toHaveBeenCalled()
      expect(result).toEqual("someValue")
    })
  });

  describe('getTaskById', () => {
    it("get task by id", async () => {
      const id = 1
      const payload = new Task()

      taskRepository.getTaskById.mockResolvedValue(payload)
      expect(taskRepository.getTaskById).not.toHaveBeenCalled()

      const result = await tasksService.getTaskById(id)

      expect(taskRepository.getTaskById).toHaveBeenCalledWith(id)
      expect(result).toBeInstanceOf(Task)
    })
  })

  describe("rateTask", () => {
    it("rate task and return payload", async () => {
      const input = new RateTaskDto()
      const payload = new Task()

      taskRepository.rateTask.mockResolvedValue(payload)
      expect(taskRepository.rateTask).not.toHaveBeenCalled()

      const result = await tasksService.rateTask(input)

      expect(taskRepository.rateTask).toHaveBeenCalledWith(input)
      expect(result).toBeInstanceOf(Task)
    })
  })

  describe("createTask", () => {
    it("create task without labels and return this task", async () => {
      const input = new CreateTaskDto()
      const payload = new Task()
      const user = new User()

      // labelsRepository.getAllLabels.mockResolvedValue(labels)
      // expect(labelsRepository.getAllLabels).not.toHaveBeenCalled()

      taskRepository.createTask.mockResolvedValue(payload)
      expect(taskRepository.createTask).not.toHaveBeenCalled()

      const result = await tasksService.createTask(input, user)
      expect(taskRepository.createTask).toHaveBeenCalled()
      expect(result).toBeInstanceOf(Task)
    })
  })

  describe("deleteTask", () => {
    it("delete task and return boolean", async () => {
      const id = 1

      taskRepository.deleteTask.mockResolvedValue(true)
      expect(taskRepository.deleteTask).not.toHaveBeenCalled()

      const result = await tasksService.deleteTask(id)

      expect(taskRepository.deleteTask).toHaveBeenCalledWith(id)
      expect(result).toEqual(true)
    })
  })

  describe("updateStatus", () => {
    it("update status of task and return this task", async () => {
      const id = 1
      const status = TaskStatus.DONE
      const task = new Task()

      taskRepository.updateStatus.mockResolvedValue(task)
      expect(taskRepository.updateStatus).not.toHaveBeenCalled()

      const result = await tasksService.updateStatus(id, status)
      expect(taskRepository.updateStatus).toHaveBeenCalledWith(id, status)
      expect(result).toBeInstanceOf(Task)
    })
  })
})