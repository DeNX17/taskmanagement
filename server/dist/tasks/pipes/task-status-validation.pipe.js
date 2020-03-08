"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_status_enum_1 = require("../task-status.enum");
class TaskStatusValidationPipe {
    transform(value) {
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException("value is an invalid");
        }
        return value;
    }
    isStatusValid(status) {
        return !!task_status_enum_1.TaskStatus[status];
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-status-validation.pipe.js.map