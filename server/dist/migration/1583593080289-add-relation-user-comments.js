"use strict";
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
class addRelationUserComments1583593080289 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const column = new typeorm_1.TableColumn({
                type: "uuid",
                name: "authorId",
                isNullable: true,
            });
            yield queryRunner.addColumn("comment", column);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn("comment", "authorId");
        });
    }
}
exports.addRelationUserComments1583593080289 = addRelationUserComments1583593080289;
//# sourceMappingURL=1583593080289-add-relation-user-comments.js.map