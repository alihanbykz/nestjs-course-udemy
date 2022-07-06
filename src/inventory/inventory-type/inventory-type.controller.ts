import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { InventoryTypeDto } from "tools/dtos/inventory-type.dto";
import { InventoryTypeModel } from "tools/models/inventory-type.model";
import { InventoryTypeService } from "./inventory-type.service";

@ApiTags('inventory-type')
@Controller('inventory-type')
export class InventoryTypeController{
    constructor(private readonly inventoryTypeService: InventoryTypeService){

    }

    @Post()
    async createInventoryType(@Body() body:InventoryTypeDto): Promise<InventoryTypeModel>{
        return await this.inventoryTypeService.create(body);
    }

    @Get()
    async getAllInventoryType(): Promise<InventoryTypeModel[]>{
        return await this.inventoryTypeService.findAll();
    }

    @Get(':id')
    async getInventoryType(@Param() params): Promise<InventoryTypeModel>{
        return await this.inventoryTypeService.findOne(params.id);
    }

    @Put(':id')
    async updateInventoryType(@Param('id') id:string, @Body() InventoryTypeUpdateDto:InventoryTypeDto): Promise<InventoryTypeModel>{
        return await this.inventoryTypeService.update(id, InventoryTypeUpdateDto);
    }

    @Delete(':id')
    async removeInventoryType(@Param('id') id: string): Promise<InventoryTypeModel>{
        return await this.inventoryTypeService.delete(id);
    } 
}