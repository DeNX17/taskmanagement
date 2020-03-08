import { Module } from '@nestjs/common';
import { LabelsService } from './labels.service';
import { LabelsController } from './labels.controller';
import { LabelsRepository } from './labels.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([LabelsRepository])
  ],
  providers: [LabelsService],
  controllers: [LabelsController]
})
export class LabelsModule { }
