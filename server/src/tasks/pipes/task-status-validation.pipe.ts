import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {

  transform(value: any) {
    if (!this.isStatusValid(value)) {
      throw new BadRequestException("value is an invalid")
    }

    return value;
  }

  private isStatusValid(status: any) {
    return !!TaskStatus[status]
  }
}