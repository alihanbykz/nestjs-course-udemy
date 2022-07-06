import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ResourceService } from "libs/services/resource.service";
import { Model } from "mongoose";
import { ProductDto } from "tools/dtos/product.dto";
import { ProductModel } from "tools/models/product.model";

@Injectable()
export class ProductService extends ResourceService<ProductModel,ProductDto,ProductDto>{
    constructor(
        @InjectModel('Product') private readonly productMongo: Model<ProductModel>,
    ){
        super(productMongo)
    }
}