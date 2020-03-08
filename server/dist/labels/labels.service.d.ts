import { CreateLabelDto } from './dto/create-label.dto';
import { LabelsRepository } from "./labels.repository";
import { FilterLabelDto } from './dto/filter-label.dto';
export declare class LabelsService {
    private LabelsRepository;
    constructor(LabelsRepository: LabelsRepository);
    getAllLabels(filterLabel: FilterLabelDto): Promise<import("./label.entity").Label[]>;
    createLabel(createLabel: CreateLabelDto): Promise<import("./label.entity").Label>;
}
