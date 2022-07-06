import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RoleDto } from "tools/dtos/role.dto";
import { RoleModel } from "tools/models/role.model";
import { RoleService } from "./role.service";

@ApiTags('role')
@Controller('role')
export class RoleController{
    constructor(private readonly roleService:RoleService){

    }

    @Post()
    async createRole(@Body() body: RoleDto): Promise<RoleModel>{
        return await this.roleService.create(body);
    }

    @Get()
    async getAllRoles():Promise<RoleModel[]>{
        return await this.roleService.findAll();
    }

    @Get(':id')
    async getRole(@Param() params): Promise<RoleModel>{
        return await this.roleService.findOne(params.id);
    }

    @Put(':id')
    async updateRole(@Param('id') id:string, @Body() RoleUpdate:RoleDto): Promise<RoleModel>{
        return await this.roleService.update(id, RoleUpdate);
    }

    @Delete(':id')
    async removeRole(@Param('id') id:string): Promise<RoleModel>{
        return await this.roleService.delete(id);
    }
}