import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';
import { ResultSignup } from './dto/result-signup';
import { ResultSignIn } from './dto/result-signin';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<ResultSignup>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<ResultSignIn>;
    oauth(res: any): void;
    createUserVK(res: any, code: any, req: any): Promise<void>;
}
