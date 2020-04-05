import { Repository, EntityRepository } from "typeorm";
import { Label } from "./label.entity";
import { CreateLabelDto } from "./dto/create-label.dto";
import { FilterLabelDto } from "./dto/filter-label.dto";
import { InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Label)
export class LabelsRepository extends Repository<Label> {

  async getAllLabels(filterLabel: FilterLabelDto) {
    // if (filterLabel) {
    //   const labels = await this.createQueryBuilder("label")
    //     .where("label.id IN (:...ids)", { ids: filterLabel.ids })
    //     .getMany();

    //   return labels
    // }

    return await this.find()
  }

  async createLabel(createLabelDto: CreateLabelDto) {
    const { name } = createLabelDto
    const label = this.create()

    label.name = name

    try {
      await label.save()
      return label
    } catch {
      throw new InternalServerErrorException()
    }
  }
}
