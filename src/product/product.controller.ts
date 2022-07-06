import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductDto } from "tools/dtos/product.dto";
import { ProductModel } from "tools/models/product.model";
import { ProductService } from "./product.service";

@ApiTags('product')
@Controller('product')
export class ProductController{
    constructor(private readonly productService:ProductService){

    }

    @Post()
    async createProduct(@Body() body:ProductDto): Promise<ProductModel>{
        return await this.productService.create(body);
    }

    @Get()
    async getAllProducts(): Promise<ProductModel[]>{
        return await this.productService.findAll();
    }

    @Get(':id')
    async getProduct(@Param() params): Promise<ProductModel>{
        return await this.productService.findOne(params.id);
    }

    @Put(':id')
    async updateProduct(@Param('id') id:string, @Body() ProductUpdateDto:ProductDto): Promise<ProductModel>{
        return await this.productService.update(id, ProductUpdateDto);
    }

    @Delete(':id')
    async removeProduct(@Param('id') id: string): Promise<ProductModel>{
        return await this.productService.delete(id);
    } 
}