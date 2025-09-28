import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisteruserDto } from './dto/registeruser.dto';

@Controller('auth') // 'auth' is prefix  /auth/register
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('register') //Dto is data transfer objects which transfers data from one module to another
  register(@Body() registeruserDto: RegisteruserDto) {
    const result = this.authservice.registerUser(registeruserDto);
    return result;
    //return { message: 'user registered successfully' };
  }
}
