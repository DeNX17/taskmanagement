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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const labels_service_1 = require("./labels.service");
const create_label_dto_1 = require("./dto/create-label.dto");
const filter_label_dto_1 = require("./dto/filter-label.dto");
let LabelsController = class LabelsController {
    constructor(LabelsService) {
        this.LabelsService = LabelsService;
    }
    getAllLabels(filterLabel) {
        return this.LabelsService.getAllLabels(filterLabel);
    }
    createLabel(CreateLabelDto) {
        return this.LabelsService.createLabel(CreateLabelDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_label_dto_1.FilterLabelDto]),
    __metadata("design:returntype", void 0)
], LabelsController.prototype, "getAllLabels", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_label_dto_1.CreateLabelDto]),
    __metadata("design:returntype", void 0)
], LabelsController.prototype, "createLabel", null);
LabelsController = __decorate([
    common_1.Controller('labels'),
    __metadata("design:paramtypes", [labels_service_1.LabelsService])
], LabelsController);
exports.LabelsController = LabelsController;
//# sourceMappingURL=labels.controller.js.map