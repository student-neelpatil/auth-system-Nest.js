import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisteruserDto } from './dto/registeruser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userservice: UserService) {}

  // logic
  /**
   * check email already exist or not
   *  hash the password
   * store the user into db
   * generte jwt tokens
   * send token in response
   */
  registerUser(registeruserDto: RegisteruserDto) {
    console.log(registeruserDto);
    return this.userservice.createuser();
  }
}
