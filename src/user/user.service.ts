import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import environment from 'tools/environment/environment';
import { UserModel } from 'tools/models/user.model';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashText = environment.hashText;

@Injectable()
export class UserService extends ResourceService<UserModel,UserCreateDto,UserUpdateDto>{
    constructor(
        @InjectModel('User') private readonly userMongo: Model<UserModel>,
    ) {
        super(userMongo)
    }

    async convertToHash(value: string){
        let hashPwd;
        await bcrypt.hash(`${hashText}${value}`,saltRounds).then(hash => {
            hashPwd = hash;
        });
        return await hashPwd;
    }

    async compareHashes (password, hashed){
        const match = await bcrypt.compareSync(`${hashText}${password}`,hashed);
        return await match;
    }
}
