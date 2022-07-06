import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { LoginService } from './login.service';

@ApiTags('login')
@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async createUser(@Body() body: UserLoginDto): Promise<UserModel> {
    console.log("login yap");
    return await this.loginService.loginUser(body);
  }
}