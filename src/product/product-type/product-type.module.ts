import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductTypeSchema } from "tools/models/product-type.model";
import { ProductTypeController } from "./product-type.controller";
import { ProductTypeService } from "./product-type.service";

@Module({
    imports: [MongooseModule.forFeature([{name:'ProductType',schema:ProductTypeSchema}])],
    controllers: [ProductTypeController],
    providers: [ProductTypeService],
})
export class ProductTypeModule{}