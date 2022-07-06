import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ResourceService } from "libs/services/resource.service";
import { Model } from "mongoose";
import { ProductTypeDto } from "tools/dtos/product-type.dto";
import { ProductTypeModel } from "tools/models/product-type.model";

@Injectable()
export class ProductTypeService extends ResourceService<ProductTypeModel,ProductTypeDto,ProductTypeDto>{
    constructor(
        @InjectModel('ProductType') private readonly producTypetMongo: Model<ProductTypeModel>,
    ){
        super(producTypetMongo)
    }
}