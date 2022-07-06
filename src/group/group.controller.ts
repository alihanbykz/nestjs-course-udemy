import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GroupCreateDto } from "tools/dtos/group.dto";
import { GroupModel } from "tools/models/group.model";
import { GroupService } from "./group.service";

@ApiTags('group')
@Controller('group')
export class GroupController{
    constructor(private readonly groupService:GroupService){

    }

    @Post()
    async createGroup(@Body() body:GroupCreateDto): Promise<GroupModel>{
        return await this.groupService.create(body);
    }

    @Get()
    async getAllGroups(): Promise<GroupModel[]>{
        return await this.groupService.findAll();
    }

    @Get(':id')
    async getGroup(@Param() params): Promise<GroupModel>{
        return await this.groupService.findOne(params.id);
    }

    @Put(':id')
    async updateGroup(@Param('id') id:string, @Body() groupUpdateDto:GroupCreateDto): Promise<GroupModel>{
        return await this.groupService.update(id, groupUpdateDto);
    }

    @Delete(':id')
    async removeGroup(@Param('id') id: string): Promise<GroupModel>{
        return await this.groupService.delete(id);
    } 
}