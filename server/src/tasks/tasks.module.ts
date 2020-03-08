import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { CommentModule } from '../comment/comment.module';
import { LabelsModule } from '../labels/labels.module';
import { LabelsRepository } from '../labels/labels.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository, LabelsRepository]),
    CommentModule,
    LabelsModule,
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule { }
