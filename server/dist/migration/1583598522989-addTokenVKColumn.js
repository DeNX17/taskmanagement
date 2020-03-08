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
class addTokenVKColumn1583598522989 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const column = new typeorm_1.TableColumn({
                type: "varchar",
                name: "tokenVK",
                isNullable: true,
            });
            if (!(yield queryRunner.hasColumn("user", "tokenVK"))) {
                yield queryRunner.addColumn("user", column);
            }
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield queryRunner.hasColumn("user", "tokenVK")) {
                yield queryRunner.dropColumn("user", "tokenVK");
            }
        });
    }
}
exports.addTokenVKColumn1583598522989 = addTokenVKColumn1583598522989;
//# sourceMappingURL=1583598522989-addTokenVKColumn.js.map