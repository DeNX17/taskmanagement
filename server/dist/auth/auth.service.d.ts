import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { ResultSignup } from './dto/result-signup';
import { ResultSignIn } from './dto/result-signin';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<ResultSignup>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<ResultSignIn>;
    getFiendsNames(token: string): Promise<string[]>;
    createUserVK(token: any): Promise<boolean>;
}
