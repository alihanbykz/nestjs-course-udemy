import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { FilterModel } from 'tools/models/filter.model';
import { UserModel } from 'tools/models/user.model';
import { TotalService } from './total.service';

@ApiTags('total')
@Controller('total')
export class TotalController {

    constructor(private readonly totalService:TotalService){
        
    }

    @Get()   // API endpoint get ile  istek alıyorsa bu endpoint ile veri okunabilir
    async getAllUsers(): Promise<UserModel[]>{
        return await this.totalService.findAll();
    }
     
}
