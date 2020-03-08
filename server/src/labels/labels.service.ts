import { Injectable } from '@nestjs/common';
import { CreateLabelDto } from './dto/create-label.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LabelsRepository } from "./labels.repository"
import { FilterLabelDto } from './dto/filter-label.dto';

@Injectable()
export class LabelsService {
  constructor(
    @InjectRepository(LabelsRepository)
    private LabelsRepository: LabelsRepository
  ) { }

  getAllLabels(filterLabel: FilterLabelDto) {
    return this.LabelsRepository.getAllLabels(filterLabel)
  }

  createLabel(createLabel: CreateLabelDto) {
    return this.LabelsRepository.createLabel(createLabel)
  }
}
