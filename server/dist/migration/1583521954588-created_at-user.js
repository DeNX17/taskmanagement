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
class createdAtUser1583521954588 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = new Date();
            const created_atColumn = new typeorm_1.TableColumn({
                name: "created_at",
                isNullable: true,
                type: "varchar",
            });
            yield queryRunner.addColumn("user", created_atColumn);
            yield queryRunner.query(`UPDATE "user" SET "created_at" = '${date.toISOString()}' WHERE "created_at" IS NULL`);
            created_atColumn.isNullable = false;
            yield queryRunner.changeColumn("user", "created_at", created_atColumn);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn("user", "created_at");
        });
    }
}
exports.createdAtUser1583521954588 = createdAtUser1583521954588;
//# sourceMappingURL=1583521954588-created_at-user.js.map