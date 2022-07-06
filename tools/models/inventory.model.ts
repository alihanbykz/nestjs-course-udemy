import mongoose from "mongoose";
import { AuditModel } from "./audit.model";
import { InventoryTypeModel } from "./inventory-type.model";
import { ProductModel } from "./product.model";

export class InventoryModel {
    id: string;
    barcode: number;
    description: string;
    audit: AuditModel;
    type: InventoryTypeModel;
    product: ProductModel;
}

export const InventorySchema = new mongoose.Schema({
    barcode: Number,
    description: String,
    audit: Object,
    product: Object,
});