import { Controller, Get, Param, ParseIntPipe, Post, Body, Delete, Patch, Query, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { FilterTaskDto } from './dto/filter-task.dto';
import { RateTaskDto } from './dto/rate-task.dto';
import { CurrentUser } from '../auth/user-decorator';
import { User } from '../auth/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthGuardJWT } from '../constants/constants';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) { }

	@Get()
	getTasksAsync(@Query() filterDto: FilterTaskDto): Promise<Task[]> {
		return this.tasksService.getTasks(filterDto)
	}

	@Get("/:id")
	getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
		return this.tasksService.getTaskById(id);
	}

	@UseGuards(AuthGuard(AuthGuardJWT))
	@Post()
	createTask(
		@CurrentUser() user: User,
		@Body() createTaskDto: CreateTaskDto,
	): Promise<Task> {
		return this.tasksService.createTask(createTaskDto, user)
	}


	@Delete('/:id')
	deleteTask(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
		return this.tasksService.deleteTask(id)
	}

	@Patch('/:id')
	updateStatus(
		@Param('id', ParseIntPipe) id: number,
		@Body('status', TaskStatusValidationPipe) status: TaskStatus,
	) {
		return this.tasksService.updateStatus(id, status)
	}

	@Post("/rate")
	rateTask(@Body() rateTask: RateTaskDto): Promise<Task> {
		return this.tasksService.rateTask(rateTask)
	}
}
