import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from 'tools/models/user.model';

@Module({
  imports: [MongooseModule.forFeature([{name:'User', schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
