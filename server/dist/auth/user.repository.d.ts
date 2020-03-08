import { Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import { ResultSignup } from "./dto/result-signup";
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<ResultSignup>;
    createUserVK(meInfo: any, token: string): Promise<boolean>;
    validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string>;
}
