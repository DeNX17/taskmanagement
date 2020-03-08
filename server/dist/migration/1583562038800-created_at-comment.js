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
class createdAtComment1583562038800 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const column = new typeorm_1.TableColumn({
                type: "varchar",
                name: "created_at",
                isNullable: false,
            });
            if (yield queryRunner.hasColumn("comment", "date")) {
                yield queryRunner.changeColumn("comment", "date", column);
            }
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const column = new typeorm_1.TableColumn({
                type: "varchar",
                name: "date",
                isNullable: false,
            });
            if (yield queryRunner.hasColumn("comment", "date")) {
                yield queryRunner.dropColumn("comment", "date");
            }
            if (yield queryRunner.hasColumn("comment", "created_at")) {
                yield queryRunner.changeColumn("comment", "created_at", column);
            }
        });
    }
}
exports.createdAtComment1583562038800 = createdAtComment1583562038800;
//# sourceMappingURL=1583562038800-created_at-comment.js.map