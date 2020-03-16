"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_repository_1 = require("./task.repository");
const labels_repository_1 = require("../labels/labels.repository");
const schedule_1 = require("@nestjs/schedule");
let TasksService = class TasksService {
    constructor(taskRepository, labelRepository) {
        this.taskRepository = taskRepository;
        this.labelRepository = labelRepository;
    }
    getTasks(filterDto) {
        return this.taskRepository.getTasks(filterDto);
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.getTaskById(id);
        });
    }
    createTask(createTaskDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { labelIds } = createTaskDto;
            const labels = labelIds && labelIds.length > 0
                && (yield this.labelRepository.getAllLabels({ ids: labelIds }));
            return this.taskRepository.createTask(createTaskDto, labels, user);
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.deleteTask(id);
        });
    }
    updateStatus(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.updateStatus(id, status);
        });
    }
    rateTask(rateTask) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.rateTask(rateTask);
        });
    }
    statusTransferToProgress() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.statusTransferToProgress();
        });
    }
};
__decorate([
    schedule_1.Cron("10 * * * * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "statusTransferToProgress", null);
TasksService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository,
        labels_repository_1.LabelsRepository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map