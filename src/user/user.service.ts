import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createuser() {
    return { message: 'user alredy created' };
  }
}
