import { Test } from "@nestjs/testing"
import { TaskRepository } from "./task.repository";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Label } from "../labels/label.entity";
import { TaskStatus } from "./task-status.enum";
import { RateTaskDto } from "./dto/rate-task.dto";
import { FilterTaskDto } from "./dto/filter-task.dto";
import { NotFoundException } from "@nestjs/common";

describe('TaskRepository', () => {
  let taskRepository

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TaskRepository
      ],
    }).compile();

    taskRepository = await module.get<TaskRepository>(TaskRepository);
  });

  describe("getTasks", () => {
    const tasks = [new Task(), new Task()]
    const filter = new FilterTaskDto()

    beforeEach(async () => {
      taskRepository.createQueryBuilder = jest.fn((): unknown => ({
        orderBy: jest.fn().mockReturnThis(),
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockReturnValue(tasks),
        andWhere: jest.fn().mockReturnValue(tasks)
      }))
    })

    it("get all tasks", async () => {
      expect(taskRepository.createQueryBuilder).not.toHaveBeenCalled()

      const result = await taskRepository.getTasks(filter)

      expect(taskRepository.createQueryBuilder).toHaveBeenCalled()
      expect(result).toEqual(tasks)
    })

    it("get all tasks with search filter", async () => {
      filter.search = "test_search"

      expect(taskRepository.createQueryBuilder).not.toHaveBeenCalled()

      const result = await taskRepository.getTasks(filter)

      expect(taskRepository.createQueryBuilder).toHaveBeenCalled()
      expect(result).toEqual(tasks)
    })
  })

  describe("createTask", () => {
    it("crate task and return payload", async () => {
      const input = new CreateTaskDto()
      const labels = [new Label()]
      const task = new Task()

      task.save = jest.fn().mockReturnValue(undefined)
      taskRepository.create = jest.fn().mockReturnValue(task)

      const result = await taskRepository.createTask(input, labels)

      expect(taskRepository.create).toHaveBeenCalled()
      expect(task.save).toHaveBeenCalled()
      expect(result).toBeInstanceOf(Task)
    })
  })

  describe("getTaskById", () => {
    const id = 1
    const task = new Task()

    it("get task by id and return", async () => {
      taskRepository.findOne = jest.fn().mockReturnValue(task)
      expect(taskRepository.findOne).not.toHaveBeenCalled()

      const result = await taskRepository.getTaskById(id)

      expect(taskRepository.findOne).toHaveBeenCalled()
      expect(result).toBeInstanceOf(Task)
    })

    it("get task by id not found", async () => {
      taskRepository.findOne = jest.fn().mockReturnValue(null)

      expect(taskRepository.getTaskById(id)).rejects.toThrow(
        NotFoundException,
      )
    })
  })

  describe("deleteTask", () => {
    const id = 1
    const task = new Task()

    it("delete task by id and return boolean", async () => {
      taskRepository.findOne = jest.fn().mockResolvedValue(task)
      taskRepository.remove = jest.fn()

      expect(taskRepository.findOne).not.toHaveBeenCalled()
      expect(taskRepository.remove).not.toHaveBeenCalled()

      const result = await taskRepository.deleteTask(id)

      expect(taskRepository.findOne).toHaveBeenCalled()
      expect(taskRepository.remove).toHaveBeenCalledWith(task)
      expect(result).toEqual(true)
    })

    it("delete task by id for not found task", async () => {
      taskRepository.findOne = jest.fn().mockResolvedValue(null)
      expect(taskRepository.deleteTask(id)).rejects.toThrow(NotFoundException)
    })
  })

  describe("updateStatus", () => {
    it("update status of task and return payload", async () => {
      const task = new Task()
      const status = TaskStatus.DONE
      const id = 1

      task.save = jest.fn().mockResolvedValue(undefined)
      taskRepository.findOne = jest.fn().mockResolvedValue(task)
      taskRepository.getTaskById = jest.fn().mockResolvedValue(task)

      expect(taskRepository.getTaskById).not.toHaveBeenCalled()
      const result = await taskRepository.updateStatus(id, status)

      expect(result).toBeInstanceOf(Task)
    })
  })

  describe("rateTask", () => {
    it("rate task and return payload", async () => {
      const task = new Task()
      const rate = new RateTaskDto()

      taskRepository.findOne = jest.fn().mockResolvedValue(task)
      task.save = jest.fn().mockResolvedValue(undefined)

      expect(taskRepository.findOne).not.toHaveBeenCalled()

      const result = await taskRepository.rateTask(rate)

      expect(result).toBeInstanceOf(Task)
    })
  })
})