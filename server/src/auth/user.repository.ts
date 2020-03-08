import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { ResultSignup } from "./dto/result-signup";
import { genSalt, hash } from "bcryptjs";
import { uuid } from 'uuidv4';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<ResultSignup> {
    const { username, password } = authCredentialsDto

    const date = new Date()
    const user = this.create()

    user.id = uuid()
    user.username = username
    user.salt = await genSalt()
    user.password = await hash(password, user.salt)
    user.tokenVK = null
    user.created_at = date.toISOString()

    try {
      await user.save()
      return { result: true }
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException("User name already exist")
      } else {
        console.log(error)
        throw new InternalServerErrorException();
      }
    }
  }

  async createUserVK(meInfo: any, token: string): Promise<boolean> {
    const user = this.create()

    user.username = meInfo.response[0].first_name
    user.salt = await genSalt()
    user.password = await hash("123456", user.salt)
    user.tokenVK = token

    try {
      await user.save()
      return true
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException("User name already exist")
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto

    const user = await this.findOne({ username })

    if (user && user.validatePassword(password)) {
      return user.username
    } else {
      return null
    }
  }
}