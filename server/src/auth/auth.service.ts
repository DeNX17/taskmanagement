import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { ResultSignup } from './dto/result-signup';
import { ResultSignIn } from './dto/result-signin';
import fetch from "node-fetch"

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) { }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<ResultSignup> {
    return this.userRepository.signUp(authCredentialsDto)
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<ResultSignIn> {
    const username = await this.userRepository.validateUserPassword(authCredentialsDto)

    if (!username) {
      throw new UnauthorizedException("Invalid cred")
    }

    const payload: JwtPayload = { username }

    const accessToken = await this.jwtService.sign(payload)

    return { accessToken }
  }

  async getFiendsNames(token: string): Promise<string[]> {
    const data = await (await fetch(`https://api.vk.com/method/friends.get?access_token=${token}&v=5.103`)).json()

    const user_ids = data.response.items.join(',')

    const friendUsers = await (await fetch(`https://api.vk.com/method/users.get?user_ids=${user_ids}&access_token=${token}&v=5.103`)).json()

    const friendNames = friendUsers.response.map((friend: any): any => `${friend.first_name} ${friend.last_name}`)

    return friendNames
  }

  async createUserVK(token: any): Promise<boolean> {
    const { access_token, user_id } = token

    const meInfo = await (await fetch(`https://api.vk.com/method/users.get?user_ids=${user_id}&access_token=${access_token}&v=5.103`)).json()

    return await this.userRepository.createUserVK(meInfo, access_token)
  }
}
