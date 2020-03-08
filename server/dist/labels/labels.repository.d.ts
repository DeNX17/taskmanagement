import { Repository } from "typeorm";
import { Label } from "./label.entity";
import { CreateLabelDto } from "./dto/create-label.dto";
import { FilterLabelDto } from "./dto/filter-label.dto";
export declare class LabelsRepository extends Repository<Label> {
    getAllLabels(filterLabel: FilterLabelDto): Promise<Label[]>;
    createLabel(createLabelDto: CreateLabelDto): Promise<Label>;
}
