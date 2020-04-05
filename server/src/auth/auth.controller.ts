import { Controller, Post, Body, ValidationPipe, Req, Get, Res, Query, UseGuards } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';
import { ResultSignup } from './dto/result-signup';
import { ResultSignIn } from './dto/result-signin';
import fetch from "node-fetch"
import { root } from 'src/common/variables';
import { CLIENT_ID, CLIENT_SECRET } from 'src/common/constants';
import { CurrentUser } from './user-decorator';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthGuardJWT } from 'src/constants/constants';

@Controller('api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @Post('/me')
  @UseGuards(AuthGuard(AuthGuardJWT))
  getMe(@CurrentUser() user: User): User {
    return user
  }

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<ResultSignup> {
    return this.authService.signUp(authCredentialsDto)
  }

  @Post("/signin")
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<ResultSignIn> {
    return this.authService.signIn(authCredentialsDto)
  }

  @Get("/vk")
  oauth(@Res() res): void {
    const redirect_uri = `${root}/auth/createUserVK`
    res.status(302).redirect(`https://oauth.vk.com/authorize?client_id=${CLIENT_ID}&display=page&redirect_uri=${redirect_uri}&scope=friends`)
  }

  @Get("/createUserVK")
  async createUserVK(@Res() res, @Query('code') code, @Req() req): Promise<void> {
    const redirect_uri = `${root}/auth/createUserVK`

    const token = await (await fetch(`https://oauth.vk.com/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=1&redirect_uri=${redirect_uri}&code=${code}`)).json()

    await this.authService.createUserVK(token)

    res.status(302).redirect(root)
  }
}
