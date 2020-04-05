import { Controller, Post, Body, Get } from '@nestjs/common';
import { LabelsService } from './labels.service';
import { CreateLabelDto } from './dto/create-label.dto';
import { FilterLabelDto } from './dto/filter-label.dto';

@Controller('api/labels')
export class LabelsController {
  constructor(private LabelsService: LabelsService) { }

  @Get()
  getAllLabels(@Body() filterLabel: FilterLabelDto) {
    return this.LabelsService.getAllLabels(filterLabel)
  }

  @Post()
  createLabel(@Body() CreateLabelDto: CreateLabelDto) {
    return this.LabelsService.createLabel(CreateLabelDto)
  }
}
