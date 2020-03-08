"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
const task_entity_1 = require("../tasks/task.entity");
const common_1 = require("@nestjs/common");
let CommentRepository = class CommentRepository extends typeorm_1.Repository {
    createComment(createComment, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { taskId, text } = createComment;
            const comment = this.create();
            console.log(user);
            const task = yield task_entity_1.Task.findOne(taskId);
            const nowDate = new Date();
            comment.text = text;
            comment.author = user;
            comment.created_at = nowDate.toISOString();
            comment.task = task;
            try {
                comment.save();
                return comment;
            }
            catch (_a) {
                throw new common_1.InternalServerErrorException();
            }
        });
    }
};
CommentRepository = __decorate([
    typeorm_1.EntityRepository(comment_entity_1.Comment)
], CommentRepository);
exports.CommentRepository = CommentRepository;
//# sourceMappingURL=comment.repository.js.map