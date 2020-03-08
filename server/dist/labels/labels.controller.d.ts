import { LabelsService } from './labels.service';
import { CreateLabelDto } from './dto/create-label.dto';
import { FilterLabelDto } from './dto/filter-label.dto';
export declare class LabelsController {
    private LabelsService;
    constructor(LabelsService: LabelsService);
    getAllLabels(filterLabel: FilterLabelDto): Promise<import("./label.entity").Label[]>;
    createLabel(CreateLabelDto: CreateLabelDto): Promise<import("./label.entity").Label>;
}
