import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import * as jwt from 'jsonwebtoken';
import environment from 'tools/environment/environment';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('User') private readonly userMongo: Model<UserModel>,
    private readonly userService: UserService,
  ) {}

  async loginUser(user: UserLoginDto): Promise<any> {

    try {
      const existUser = await this.userMongo
        .findOne({
          email: user.email,
        })
        .exec();


        if (existUser) {
            console.log("user var");
            let checkPwd;
            await this.userService
            .compareHashes(user.password, existUser.password)
            .then(resp => {
                if (resp) {
                    checkPwd = true;
                } else {
                    checkPwd = false;
                }
            });

            if (checkPwd) {
                console.log("şifreler uyuşuyor");
                const authJsonWebToken =  jwt.sign(
                    {user: existUser},
                    environment.jwtText,
                );
                console.log("token oluşuyor");
                return  { success: true, value: authJsonWebToken };
            } 
            else {console.log("şifreler uyuşmuyor");
                return  {
                    success: false,
                    response: 'user password is incorrect!',
                };
             }
        } else {
            console.log("user yok");
            return  { success: false, response: 'user does not exist!' };
        }

    } 
    catch (ex) {
        return  {
            success: false,
            response: 'something went wrong while login process!',
            exception: ex,
        };
    }
  }
}