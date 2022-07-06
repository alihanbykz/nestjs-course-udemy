import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductTypeDto } from "tools/dtos/product-type.dto";
import { ProductTypeModel } from "tools/models/product-type.model";
import { ProductTypeService } from "./product-type.service";

@ApiTags('product-type')
@Controller('product-type')
export class ProductTypeController{
    constructor(private readonly productTypeService:ProductTypeService){

    }

    @Post()
    async createProduct(@Body() body:ProductTypeDto): Promise<ProductTypeModel>{
        return await this.productTypeService.create(body);
    }

    @Get()
    async getAllProductType(): Promise<ProductTypeModel[]>{
        return await this.productTypeService.findAll();
    }

    @Get(':id')
    async getProduct(@Param() params): Promise<ProductTypeModel>{
        return await this.productTypeService.findOne(params.id);
    }

    @Put(':id')
    async updateProductType(@Param('id') id:string, @Body() ProductTypeUpdateDto:ProductTypeDto): Promise<ProductTypeModel>{
        return await this.productTypeService.update(id, ProductTypeUpdateDto);
    }

    @Delete(':id')
    async removeProductType(@Param('id') id: string): Promise<ProductTypeModel>{
        return await this.productTypeService.delete(id);
    } 
}