import mongoose from "mongoose";
import { AuditModel } from "./audit.model";
import { ProductTypeModel } from "./product-type.model";

export class ProductModel {
    id: string;
    name: string;
    type: ProductTypeModel;
    audit: AuditModel;
}

export const ProductSchema = new mongoose.Schema({
    name: String,
    type: Object,
    audit: Object,
})