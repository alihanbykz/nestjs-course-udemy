import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { Roles } from 'libs/decorators/role.decorator';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { FilterModel } from 'tools/models/filter.model';
import { UserModel } from 'tools/models/user.model';
import { UserService } from './user.service';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){
        
    }

    @Post()  // Yeni bir kayıt oluşturmak için kullanılır
    @Roles('Admin')
    async createUser(@Body() body: UserCreateDto): Promise<UserModel>{
        body.password = await this.userService.convertToHash(body.password);
        return await this.userService.create(body);
    }

    @Get()   // API endpoint get ile  istek alıyorsa bu endpoint ile veri okunabilir
    async getAllUsers(): Promise<UserModel[]>{
        return await this.userService.findAll();
    }

    @Get(':id')
    //@Roles('Developer')
    async getUser(@Param() params):Promise<UserModel>{
        return await this.userService.findOne(params.id);
    }

    @Put(':id')
    @Roles('Operator')
    async updateUser(@Param('id') id:string, @Body() UserUpdateDto: UserUpdateDto) :Promise<UserModel> {
        return await this.userService.update(id, UserUpdateDto);
    }

    @Delete(':id')
    async removeUser(@Param('id') id: string) :Promise<UserModel>{
        return await this.userService.delete(id);
    }
     
}
