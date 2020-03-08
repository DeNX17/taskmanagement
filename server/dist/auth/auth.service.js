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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const node_fetch_1 = __importDefault(require("node-fetch"));
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    signUp(authCredentialsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.signUp(authCredentialsDto);
        });
    }
    signIn(authCredentialsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = yield this.userRepository.validateUserPassword(authCredentialsDto);
            if (!username) {
                throw new common_1.UnauthorizedException("Invalid cred");
            }
            const payload = { username };
            const accessToken = yield this.jwtService.sign(payload);
            return { accessToken };
        });
    }
    getFiendsNames(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (yield node_fetch_1.default(`https://api.vk.com/method/friends.get?access_token=${token}&v=5.103`)).json();
            const user_ids = data.response.items.join(',');
            const friendUsers = yield (yield node_fetch_1.default(`https://api.vk.com/method/users.get?user_ids=${user_ids}&access_token=${token}&v=5.103`)).json();
            const friendNames = friendUsers.response.map((friend) => `${friend.first_name} ${friend.last_name}`);
            return friendNames;
        });
    }
    createUserVK(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const { access_token, user_id } = token;
            const meInfo = yield (yield node_fetch_1.default(`https://api.vk.com/method/users.get?user_ids=${user_id}&access_token=${access_token}&v=5.103`)).json();
            return yield this.userRepository.createUserVK(meInfo, access_token);
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map