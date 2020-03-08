import { LabelsRepository } from "./labels.repository";
import { Test } from "@nestjs/testing";
import { Label } from "./label.entity";
import { CreateLabelDto } from "./dto/create-label.dto";

describe("Labels repository", () => {
  let labelsRepository

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        LabelsRepository
      ],
    }).compile();

    labelsRepository = await module.get<LabelsRepository>(LabelsRepository);
  });

  describe("getLabels", () => {
    const labels = [new Label(), new Label()]

    it("get all labels", async () => {
      labelsRepository.find = jest.fn().mockResolvedValue(labels)

      const result = await labelsRepository.getAllLabels()

      expect(result).toEqual(labels)
    })

    // it("get all labels with filter", async () => {
    //   filter.ids = ["id", "id"]

    //   labelsRepository.createQueryBuilder = jest.fn((): unknown => ({
    //     where: jest.fn().mockReturnThis(),
    //     getMany: jest.fn().mockResolvedValue(labels)
    //   }))

    //   const result = await labelsRepository.getAllLabels(filter)

    //   expect(labelsRepository.createQueryBuilder).toHaveBeenCalled()
    //   expect(result).toEqual(labels)
    // })
  })

  describe("createLabel", () => {
    it("create label", async () => {
      const input = new CreateLabelDto()
      const label = new Label()

      labelsRepository.create = jest.fn().mockReturnValue(label)
      label.save = jest.fn().mockResolvedValue(undefined)

      const result = await labelsRepository.createLabel(input)

      expect(labelsRepository.create).toHaveBeenCalled()
      expect(result).toBeInstanceOf(Label)
    })
  })
})